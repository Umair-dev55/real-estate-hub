import { useCallback, useSyncExternalStore } from 'react';

const KEY = 'ze-favorites';
const EMPTY = [];
const listeners = new Set();

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

let snapshot = read();

function write(next) {
  snapshot = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage unavailable (private mode etc.) - keep in-memory state only
  }
  listeners.forEach((l) => l());
}

function subscribe(callback) {
  listeners.add(callback);
  const onStorage = (e) => {
    if (e.key === KEY) {
      snapshot = read();
      callback();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', onStorage);
  };
}

const getSnapshot = () => snapshot;
const getServerSnapshot = () => EMPTY;

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isFavorite = useCallback((id) => ids.includes(id), [ids]);
  const toggle = useCallback((id) => {
    write(snapshot.includes(id) ? snapshot.filter((x) => x !== id) : [...snapshot, id]);
  }, []);

  return { ids, isFavorite, toggle };
}

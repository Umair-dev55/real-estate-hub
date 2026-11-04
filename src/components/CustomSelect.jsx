import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils.js';

export default function CustomSelect({
  value,
  onChange,
  options,            // [{ value, label, count? }]
  placeholder = 'Select',
  disabled = false,
  variant = 'box',    // 'box' (filters) | 'bare' (home hero)
  align = 'left',     // 'left' | 'right' (dropdown panel alignment)
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const selected = options.find((o) => String(o.value) === String(value));

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'w-full flex items-center justify-between gap-2 text-left transition cursor-pointer disabled:cursor-not-allowed',
          variant === 'box'
            ? cn(
                'px-3.5 py-2.5 rounded-xl border text-sm bg-white',
                open
                  ? 'border-[#c8922f] ring-2 ring-[#c8922f]/20'
                  : 'border-gray-200 hover:border-[#c8922f]/60',
                disabled && 'bg-gray-50 text-gray-400'
              )
            : 'text-sm font-semibold text-gray-800 bg-transparent'
        )}
      >
        <span className={cn('truncate', !selected?.value && variant === 'box' && 'text-gray-500')}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn('w-4 h-4 text-gray-400 shrink-0 transition-transform', open && 'rotate-180 text-[#c8922f]')}
        />
      </button>

      {open && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-full w-max max-w-[320px] max-h-64 overflow-y-auto',
            'bg-white rounded-xl border border-gray-100 p-1.5',
            'shadow-[0_20px_50px_-12px_rgba(16,42,67,0.25)]',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {options.map((o) => {
            const active = String(o.value) === String(value);
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center justify-between gap-6 px-3 py-2 rounded-lg text-sm text-left transition cursor-pointer',
                  active
                    ? 'bg-[#c8922f]/10 text-[#8a5f12] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#102a43]'
                )}
              >
                <span className="truncate">{o.label}</span>
                <span className="flex items-center gap-2 shrink-0">
                  {o.count !== undefined && (
                    <span className="text-xs text-gray-400">{o.count}</span>
                  )}
                  {active && <Check className="w-4 h-4 text-[#c8922f]" />}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
import { useCallback, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils.js';

function LazyImageInner({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  eager = false,
  width,
  height,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // Cached images can finish loading before React attaches onLoad
  const imgRef = useCallback((el) => {
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        'relative w-full h-full overflow-hidden bg-gray-100',
        wrapperClassName
      )}
    >
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gray-200"
        />
      )}

      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-300"
        >
          <ImageOff className="w-8 h-8" />
        </div>
      ) : (
        <div
          className={cn(
            'w-full h-full transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
            loaded
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 motion-reduce:scale-100 motion-reduce:opacity-100'
          )}
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={eager ? 'high' : undefined}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={className}
            {...rest}
          />
        </div>
      )}
    </div>
  );
}

// Re-mount when src changes so the skeleton/fade-in replays for the new image
export default function LazyImage(props) {
  return <LazyImageInner key={props.src} {...props} />;
}

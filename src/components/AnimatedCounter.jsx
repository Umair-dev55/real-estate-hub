import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;
      const endValue = typeof value === 'number' ? value : parseInt(value, 10) || 0;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Ease out quad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(startValue + (endValue - startValue) * easeProgress);
        
        setCount(current);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  // Format with k if over 1000 and originally displayed that way
  const formatDisplay = (num) => {
    if (num >= 1000 && value >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
    }
    return num.toLocaleString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? formatDisplay(count) : '0'}
      {suffix}
    </span>
  );
}


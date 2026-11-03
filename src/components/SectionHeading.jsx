import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SectionHeading({
  label,
  title,
  subtitle,
  linkText,
  linkTo,
  centered = false,
  className = '',
  light = false,
}) {
  return (
    <AnimatedSection
      variant="fadeUp"
      className={cn(
        'mb-10 sm:mb-12',
        centered && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      <div className={cn('flex flex-col md:flex-row md:items-end justify-between gap-4')}>
        <div className={centered ? 'w-full' : 'max-w-2xl'}>
          {label && (
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-2">
              {label}
            </span>
          )}
          {title && (
            <h2
              className={cn(
                'font-serif text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight',
                light ? 'text-white' : 'text-[#1a2332]'
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                'mt-3 text-base sm:text-lg leading-relaxed',
                light ? 'text-gray-300' : 'text-gray-600'
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {linkText && linkTo && !centered && (
          <Link
            to={linkTo}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a2332] hover:text-[#c9a96e] transition-colors group shrink-0 mt-2 md:mt-0"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </AnimatedSection>
  );
}


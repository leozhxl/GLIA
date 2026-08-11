interface LogoProps {
  className?: string;
  variant?: 'default' | 'inverse';
  compact?: boolean;
  tagline?: string;
}

export function Logo({
  className = '',
  variant = 'default',
  compact = false,
  tagline,
}: LogoProps) {
  const isInverse = variant === 'inverse';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <img
        src="/logo-glia-mark.png"
        alt="GLIA"
        width="708"
        height="373"
        className={`${
          compact ? 'h-9' : isInverse ? 'h-20' : 'h-11 sm:h-16'
        } w-auto shrink-0 object-contain`}
      />

      {tagline && (
        <span className="min-w-0 max-w-[6.75rem] border-l border-glia-200 pl-2 text-[0.48rem] font-bold uppercase leading-[1.25] tracking-[0.08em] text-coral-600 sm:max-w-52 sm:pl-3 sm:text-[0.65rem] sm:leading-tight sm:tracking-wider">
          {tagline}
        </span>
      )}
    </div>
  );
}

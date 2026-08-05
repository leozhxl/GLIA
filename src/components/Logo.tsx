interface LogoProps {
  className?: string;
  withText?: boolean;
  light?: boolean;
  tagline?: string;
}

export function Logo({ className = '', withText = true, light = false, tagline }: LogoProps) {
  if (!light) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src="/logo-glia-mark.png"
          alt="GLIA"
          className="h-14 w-auto sm:h-16"
        />
        {tagline && (
          <span className="hidden flex-col justify-center border-l border-glia-200 pl-3 leading-tight sm:flex">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-coral-600">
              {tagline}
            </span>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-coral-500 shadow-lg shadow-coral-500/30">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="4.2" fill="white" />
          <circle cx="6" cy="8" r="2.4" fill="#d2f2ea" />
          <circle cx="26" cy="8" r="2.4" fill="#d2f2ea" />
          <circle cx="6" cy="24" r="2.4" fill="#d2f2ea" />
          <circle cx="26" cy="24" r="2.4" fill="#d2f2ea" />
          <path
            d="M16 16L6 8M16 16L26 8M16 16L6 24M16 16L26 24"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      </div>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">
            GLIA
          </span>
          {tagline && (
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider text-sand-200">
              {tagline}
            </span>
          )}
        </span>
      )}
    </div>
  );
}

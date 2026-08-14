interface SectionDividerProps {
  position?: 'top' | 'bottom';
}

export function SectionDivider({ position = 'top' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-x-0 h-[3px] bg-gradient-to-r from-sun-600 via-sun-300 to-sun-600 ${
        position === 'top' ? 'top-0' : 'bottom-0'
      }`}
    />
  );
}

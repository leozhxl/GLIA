export function getInitials(name: string) {
  return name
    .replace(/^(Dra?\.)\s+/i, '')
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

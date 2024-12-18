type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | { [key: string]: string };

export function twMerge(...classNames: ClassValue[]): string {
  return classNames
    .flat()
    .filter(Boolean)
    .map((className) => {
      if (typeof className === 'string') {
        return className;
      } else if (typeof className === 'object' && className !== null) {
        return Object.values(className).join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
}

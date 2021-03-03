export const abbreviate = (string: string): string =>
  string
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

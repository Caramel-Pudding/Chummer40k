export const abbreviate = (inputString: string): string =>
  inputString
    .split(" ")
    .map((word) => word.charAt(0))
    .map((letter) => letter.toUpperCase())
    .join("");

export const stringEnumToArrayOfNames = (stringEnum: {
  [stringEnum: string]: string;
}): string[] => Object.values(stringEnum);

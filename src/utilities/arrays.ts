export const convertStringEnumToArrayOfNames = (stringEnum: {
  [stringEnum: string]: string;
}): string[] => Object.values(stringEnum);

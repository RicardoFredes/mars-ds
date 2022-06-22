export const makeArray = (length: number, fill?: any) => {
  return length === 0 ? [] : Array(length).fill(fill || null);
};

export const isStringArray = (array: unknown[]): array is string[] => {
  return array.every((item) => typeof item === "string");
};

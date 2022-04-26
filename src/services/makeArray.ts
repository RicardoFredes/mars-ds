export const makeArray = (length: number, fill?: any) => {
  return length === 0 ? [] : Array(length).fill(fill || null);
};

export const cutText = (text: string, maxLength = 28, end = "...", shouldTrim = false) => {
  if (typeof text !== "string") return "";
  if (text.length < maxLength) return text;

  const result = text.slice(0, maxLength);

  return shouldTrim ? result.trim() : result + end;
};

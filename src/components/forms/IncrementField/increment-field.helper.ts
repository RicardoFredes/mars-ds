export const formatMinutesAsXhYmin = (value: number): string => {
  if (value === 0) return "0h";
  const hours = parseInt(String(value / 60));
  const minutes = value % 60;
  return (hours ? hours + "h" : "") + (minutes ? minutes + "min" : "");
};

export const ColorsEnum = {
  Primary: "primary",
  Info: "info",
  Success: "success",
  Warning: "warning",
  Error: "error",
  Neutral: "neutral",
} as const;

export type Colors = typeof ColorsEnum[keyof typeof ColorsEnum];

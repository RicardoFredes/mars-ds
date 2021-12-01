export const VariantsEnum = {
  Primary: "primary",
  Secondary: "secondary",
  Neutral: "neutral",
  Text: "text",
} as const;

export type Variants = typeof VariantsEnum[keyof typeof VariantsEnum];

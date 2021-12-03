export const StatusEnum = {
  Error: "error",
  Info: "info",
  Success: "success",
} as const;

export type Status = typeof StatusEnum[keyof typeof StatusEnum];

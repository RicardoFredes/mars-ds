export const StatusEnum = {
  Error: "error",
  Info: "info",
  Success: "sucess",
} as const;

export type Status = typeof StatusEnum[keyof typeof StatusEnum];

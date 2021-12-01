export const ElevationEnum = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;

export type Elevation = typeof ElevationEnum[keyof typeof ElevationEnum];

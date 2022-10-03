import { Sizes } from "@/types";

const { Small, Medium, Large } = Sizes;

export const CountdownSizes = {
  Small,
  Medium,
  Large,
} as const;

export interface CountdownProps extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {
  endDate?: string;
  color?: string;
  background?: string;
  size?: typeof CountdownSizes[keyof typeof CountdownSizes];
  showSeparator?: boolean;
  showDays?: boolean;
}

export interface CountdownPlaceProps extends React.HTMLProps<HTMLDivElement> {
  measure: string;
  value: string;
  dataTestid?: string;
}

export interface CountdownSeparatorProps {
  enable: boolean;
  color: string;
}

export interface TimeObj {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimeObjTexts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface RatingStarProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "onSelect" | "defaultValue"> {
  maxValue?: number;
  defaultValue?: number;
  onSelect?: (value: number) => void;
}

export interface StarProps extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {
  position: number;
  value: number;
}

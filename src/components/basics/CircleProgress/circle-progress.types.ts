export interface CircleProgressProps extends React.HTMLProps<HTMLDivElement> {
  steps: string[];
  position: number;
  showInfo?: boolean;
  color?: string;
}

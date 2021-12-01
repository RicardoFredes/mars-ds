import type { Elevation } from "@/types";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  elevation?: Elevation;
}

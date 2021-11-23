import { Elevations } from "../../types";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  elevation?: Elevations;
  title?: string;
}

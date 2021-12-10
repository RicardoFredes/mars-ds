import type React from "react";

export interface ItemTextProps extends Omit<React.HTMLProps<HTMLDivElement>, "as"> {
  as: any;
}

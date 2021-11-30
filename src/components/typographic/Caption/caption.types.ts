import type React from "react";

export interface CaptionProps extends Omit<React.HTMLProps<HTMLElement>, "as"> {
  as: any;
}

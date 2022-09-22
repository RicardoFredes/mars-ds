import type React from "react";

export interface ListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, "as" | "size"> {
  bulletIconName?: string;
  bulletColor?: string;
  text?: string;
  html?: string;
}

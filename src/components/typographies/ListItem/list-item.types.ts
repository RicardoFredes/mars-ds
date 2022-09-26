import type React from "react";

import type { TextBaseChildren } from "@/components/primitives/TextBase";

export interface ListItemProps
  extends Omit<React.HTMLProps<HTMLLIElement>, "as" | "size" | "children"> {
  bulletIconName?: string;
  bulletColor?: string;
  text?: string;
  html?: string;
  children?: TextBaseChildren;
}

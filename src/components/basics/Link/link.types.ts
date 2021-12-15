import React from "react";

export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, "as"> {
  as?: React.ElementType | string;
}

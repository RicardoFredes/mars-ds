import { IconProps } from "@/components/basics/Icon/icon.types";
import React from "react";

export interface ListProps extends Omit<React.HTMLProps<HTMLUListElement>, "list"> {
  list?: ListItemProps[];
  defaultBullet?: Partial<IconProps>;
}

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  bullet?: Partial<IconProps>;
  text?: string;
}

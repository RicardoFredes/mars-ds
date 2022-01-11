import React from "react";
import { ListItemProps } from "@/components/typographics/ListItem";

export interface ListProps extends Omit<React.HTMLProps<HTMLUListElement>, "list"> {
  list?: ListItemProps[];
  defaultBulletIconName?: string;
  defaultBulletColor?: string;
}

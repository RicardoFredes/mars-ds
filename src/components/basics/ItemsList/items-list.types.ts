import type { HTMLProps, ReactNode } from "react";

import type { LinkProps } from "@/components/basics/Link";
import type { ComponentLink } from "@/types";

interface ItemsListElementProps extends HTMLProps<HTMLLIElement> {
  title: string;
  link?: LinkProps;
  subtitle?: string;
  children?: ReactNode;
  icon?: string;
  iconColor?: string;
  circleColor?: string;
}

interface ItemsListProps extends Omit<HTMLProps<HTMLOListElement>, "list" | "type"> {
  componentLink?: ComponentLink;
  list: ItemsListElementProps[];
}

export type { ItemsListProps, ItemsListElementProps };

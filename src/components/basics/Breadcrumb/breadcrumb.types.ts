import type { HTMLProps } from "react";

export interface BreadcrumbProps extends Omit<HTMLProps<HTMLDivElement>, "list"> {
  list: BreadCrumbItem[];
  componentLink?: React.ElementType | string;
}

export interface BreadCrumbItem {
  label?: string;
  onClick?: () => void;
}

export interface BreadCrumbItemProps extends BreadCrumbItem {
  active: boolean;
  key?: string | number;
  componentLink?: React.ElementType | string;
  onExpand?: () => void;
}

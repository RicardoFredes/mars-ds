import type { ButtonProps } from "../Button";

import type { ImageProps } from "@/components/basics/Image";
import type { LinkProps } from "@/components/basics/Link";

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  sidebarList: SidebarList;
  LinkComponent?: React.ElementType | string;
  currentPathname?: string;
  user?: {
    name?: string;
    image?: string;
    guest?: boolean;
  };
  links?: {
    profile?: LinkProps;
    brand?: LinkProps;
    login?: ButtonProps;
    signup?: ButtonProps;
  };
  brand?: ImageProps;
  onCloseClick?: VoidFunction;
  fetching: boolean;
}

export type SidebarList = SidebarListItem[];

export interface SidebarListItem {
  label: string;
  items: SidebarItem[];
}

export interface SidebarItem {
  iconName?: string;
  label?: string;
  href?: string;
  target?: string;
  [props: string]: any;
}

export interface SidebarItemProps extends LinkProps, SidebarItem {
  isActive?: boolean;
}

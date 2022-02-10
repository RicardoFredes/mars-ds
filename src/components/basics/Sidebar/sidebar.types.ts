import type { ButtonProps } from "@/components/basics/Button";
import type { IconProps } from "@/components/basics/Icon";

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  sidebarList: SidebarList;
  user: {
    name: string;
    href: string;
    thumbnail: string;
  };
  onLogoClick?: () => void;
  onSearchClick?: () => void;
  onProfileClick?: () => void;
}

export type SidebarList = SidebarListItem[];

export interface SidebarListItem {
  label: string;
  items: SidebarItemProps[];
}

export interface SidebarItemProps extends ButtonProps {
  icon: IconProps;
  isActive?: boolean;
}

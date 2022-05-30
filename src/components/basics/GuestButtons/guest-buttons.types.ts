import type { SidebarProps } from "../Sidebar";

export interface GuestButtonsProps
  extends React.HTMLProps<HTMLDivElement>,
    Pick<SidebarProps, "links" | "LinkComponent"> {}

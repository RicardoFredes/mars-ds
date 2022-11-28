import type { ButtonProps } from "@/components/basics/Button";
import type { ComponentItem, ComponentLink } from "@/types";

type TabProps = ComponentItem & Omit<ButtonProps, "children">;

interface TabsProps extends ComponentItem {
  defaultTabIndex?: number;
  tabs?: TabProps[];
  full?: boolean;
  LinkComponent?: ComponentLink;
  align?: string;
  textColorActive?: string;
  backgroundColorActive?: string;
}

export type { TabsProps };

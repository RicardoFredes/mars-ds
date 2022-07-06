import type { ConsoleListGroupPureProps } from "@/components/basics/ConsoleListGroup";
import type { ConsoleListItemPureProps } from "@/components/basics/ConsoleListItem";
import type { ComponentItem, ComponentLink } from "@/types";

interface ConsoleListProps extends ComponentItem {
  list?: Array<ConsoleListItemPureProps & Partial<ConsoleListGroupPureProps>>;
  LinkComponent?: ComponentLink;
}

export type { ConsoleListProps };

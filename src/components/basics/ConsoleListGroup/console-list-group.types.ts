import type { ConsoleListItemPureProps } from "@/components/basics/ConsoleListItem";
import type { ConsoleListSubItemPureProps } from "@/components/basics/ConsoleListSubItem";
import type { ComponentLink } from "@/types";

type ConsoleListGroup = ConsoleListItemPureProps;

interface ConsoleListGroupPureProps extends ConsoleListGroup {
  list: ConsoleListSubItemPureProps[];
  isOpen?: boolean;
  href?: string;
  target?: string;
}

interface ConsoleListGroupProps extends ConsoleListGroupPureProps {
  showAnswer?: boolean;
  LinkComponent?: ComponentLink;
}

export type { ConsoleListGroupProps, ConsoleListGroupPureProps };

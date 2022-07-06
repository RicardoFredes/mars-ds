import type { HTMLProps, ElementType, ReactNode } from "react";

interface ConsoleListItemPureProps {
  title?: string;
  subtitle?: string;
  iconName?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isConnectorDisabled?: boolean;
  isAnswered?: boolean;
  className?: string;
  children?: ReactNode;
}

type ConsoleListItemPropsExtend = HTMLProps<HTMLAnchorElement | HTMLButtonElement> &
  ConsoleListItemPureProps;

interface ConsoleListItemProps extends ConsoleListItemPropsExtend {
  LinkComponent?: ElementType | string;
}

export type { ConsoleListItemProps, ConsoleListItemPureProps };

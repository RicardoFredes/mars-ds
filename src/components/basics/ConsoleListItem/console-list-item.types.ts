import type { HTMLProps, ElementType, ReactNode } from "react";

interface ConsoleListItemPureProps {
  title?: string;
  subtitle?: string;
  iconName?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isConnectorDisabled?: boolean;
  isAnswered?: boolean;
  isFirstItem?: boolean;
  isLastItem?: boolean;
  className?: string;
  children?: ReactNode;
}

type ConsoleListItemPropsExtend = HTMLProps<HTMLAnchorElement | HTMLButtonElement> &
  ConsoleListItemPureProps;

interface ConsoleListItemProps extends ConsoleListItemPropsExtend {
  LinkComponent?: ElementType | string;
}

type ConsoleListItemLineProps = Pick<
  ConsoleListItemProps,
  "isFirstItem" | "isLastItem" | "isConnectorDisabled"
> & {
  top?: boolean;
  bottom?: boolean;
};

export type { ConsoleListItemProps, ConsoleListItemPureProps, ConsoleListItemLineProps };

import type { AnchorHTMLAttributes, ElementType } from "react";

interface ConsoleListItemProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> {
  title: string;
  subtitle?: string;
  iconName: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isConnectorDisabled?: boolean;
  isAnswered?: boolean;
  className?: string;
  LinkComponent?: ElementType | string;
}

export type { ConsoleListItemProps };

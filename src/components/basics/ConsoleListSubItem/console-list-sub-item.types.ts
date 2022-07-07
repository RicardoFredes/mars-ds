import type { HTMLProps } from "react";

import type { ComponentLink } from "@/types";

interface ConsoleListSubItemPureProps {
  title: string;
  isAnswered?: boolean;
  isCorrect?: boolean;
  isActive?: boolean;
  showAnswer?: boolean;
  className?: string;
}

type ConsoleListItemPropsExtend = HTMLProps<HTMLAnchorElement> & ConsoleListSubItemPureProps;

interface ConsoleListSubItemProps extends ConsoleListItemPropsExtend {
  LinkComponent?: ComponentLink;
}

export type { ConsoleListSubItemProps, ConsoleListSubItemPureProps };

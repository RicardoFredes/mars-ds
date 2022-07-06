import type { ComponentLink } from "@/types";

interface ConsoleListSubItemPureProps {
  title: string;
  isAnswered?: boolean;
  isCorrect?: boolean;
  isActive?: boolean;
  showAnswer?: boolean;
  className?: string;
}

interface ConsoleListSubItemProps extends ConsoleListSubItemPureProps {
  LinkComponent?: ComponentLink;
}

export type { ConsoleListSubItemProps, ConsoleListSubItemPureProps };

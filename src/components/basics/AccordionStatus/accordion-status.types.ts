import type { AccordionCardProps } from "@/components/basics/AccordionCard";

import { iconVariant } from "./accordion-status-header";

const { alert, complete, inProgress, live, pending, waiting } = iconVariant;

export const IconVariants = {
  alert,
  complete,
  inProgress,
  live,
  pending,
  waiting,
} as const;

export interface AccordionStatusHeaderProps extends React.HTMLProps<HTMLDivElement> {
  icon: typeof IconVariants[keyof typeof IconVariants];
  title: string;
}

export interface AccordionStatusProps extends AccordionCardProps {
  icon: typeof IconVariants[keyof typeof IconVariants];
  title: string;
}

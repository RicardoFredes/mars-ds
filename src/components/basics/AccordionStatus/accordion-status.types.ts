import { AccordionCardProps } from "../AccordionCard/accordion-card.types";
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

export interface AccordionStatusProps extends AccordionCardProps {
  icon: typeof IconVariants[keyof typeof IconVariants];
  title: string;
}

import { CardElevations } from "@/components/basics/Card";
import { AccordionProps } from "@/components/basics/Accordion";

export const AccordionCardElevations = { ...CardElevations };

export interface AccordionCardProps extends AccordionProps {
  elevation?: typeof AccordionCardElevations[keyof typeof AccordionCardElevations];
  footerComponent?: React.ElementType | string;
  footerChildren?: HTMLElement | string | React.ElementType;
  headerComponent?: React.ElementType | string;
}

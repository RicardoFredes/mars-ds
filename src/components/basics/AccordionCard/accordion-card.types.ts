import { CardElevations } from "@/components/basics/Card/card.types";
import { AccordionProps } from "@/components/basics/Accordion/accordion.types";

export const AccordionCardElevations = { ...CardElevations };

export interface AccordionCardProps extends AccordionProps {
  elevation?: typeof AccordionCardElevations[keyof typeof AccordionCardElevations];
}

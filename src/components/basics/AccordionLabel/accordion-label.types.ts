import { AccordionProps } from "@/components/basics/Accordion";

export interface AccordionLabelProps extends AccordionProps {
  label: string;
  colorLabel: string;
}

export interface AccordionLabelHeaderProps {
  title?: string;
  label: string;
  colorLabel: string;
}

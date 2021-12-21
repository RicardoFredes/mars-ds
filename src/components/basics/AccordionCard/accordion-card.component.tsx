import { AccordionCardElevations, AccordionCardProps } from "./accordion-card.types";
import classNames from "classnames";
import Accordion from "@/components/basics/Accordion";
import Card from "@/components/basics/Card";

const AccordionCard = ({
  className,
  children,
  title,
  elevation = AccordionCardElevations.XLow,
  ...props
}: AccordionCardProps) => {
  const cn = classNames("accordion-card", className);
  return (
    <Card className={cn} elevation={elevation} {...props}>
      <Accordion title={title}>{children}</Accordion>
    </Card>
  );
};

export default AccordionCard;

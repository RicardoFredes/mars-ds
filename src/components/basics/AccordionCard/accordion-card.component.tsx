import { AccordionCardProps } from "./accordion-card.types";
import classNames from "classnames";
import { Accordion, Card } from "@/index";

const AccordionCard = ({ className, children, title, ...props }: AccordionCardProps) => {
  const cn = classNames("accordion-card", className);
  return (
    <Card className={cn} {...props}>
      <Accordion title={title}>{children}</Accordion>
    </Card>
  );
};

export default AccordionCard;

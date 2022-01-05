import { AccordionCardElevations, AccordionCardProps } from "./";
import classNames from "classnames";
import Accordion from "@/components/basics/Accordion";
import Card from "@/components/basics/Card";
import Button, { ButtonProps, ButtonVariants } from "@/components/basics/Button";

const AccordionCard = ({
  className,
  children,
  title,
  elevation = AccordionCardElevations.XLow,
  footerComponent,
  headerComponent,
  footerChildren,
  defaultOpen,
  ...props
}: AccordionCardProps) => {
  const cn = classNames("accordion-card", className);

  const FooterComponent = footerComponent || AccordionFooterDefault;
  return (
    <Card className={cn} elevation={elevation} {...props}>
      <Accordion title={title} headerComponent={headerComponent} defaultOpen={defaultOpen}>
        {children}
        {footerChildren && <FooterComponent>{footerChildren}</FooterComponent>}
        {footerComponent && !footerChildren && <FooterComponent />}
      </Accordion>
    </Card>
  );
};

const AccordionFooterDefault = ({ children, className, ...props }: ButtonProps) => {
  const cn = classNames("accordion-footer", className);
  return (
    <footer className={cn}>
      <Button
        variant={ButtonVariants.Text}
        {...props}
        className="flex-row-reverse"
        iconName="chevron-right"
      >
        {children}
      </Button>
    </footer>
  );
};
export default AccordionCard;

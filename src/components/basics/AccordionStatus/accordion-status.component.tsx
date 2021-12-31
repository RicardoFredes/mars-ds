import { AccordionStatusProps, IconVariants } from "./accordion-status.types";
import classNames from "classnames";
import AccordionStatusHeader from "./accordion-status-header";
import AccordionCard from "../AccordionCard";

const AccordionStatus = ({
  className,
  children,
  icon = IconVariants.complete,
  title,
  elevation,
  footerChildren,
  ...props
}: AccordionStatusProps) => {
  const cn = classNames("accordion-status", className);
  return (
    <AccordionCard
      elevation={elevation}
      headerComponent={() => <AccordionStatusHeader icon={icon} title={title} />}
      footerChildren={footerChildren}
      {...props}
      className={cn}
    >
      {children}
    </AccordionCard>
  );
};

export default AccordionStatus;

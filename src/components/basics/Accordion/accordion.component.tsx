import type { AccordionProps } from "./accordion.types";
import classNames from "classnames";

const Accordion = ({ className, children, ...props }: AccordionProps) => {
  const cn = classNames("accordion", className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Accordion;

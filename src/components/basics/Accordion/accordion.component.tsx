import { AccordionProps } from "./accordion.types";
import { HeadingSizes } from "@/components/typographics/Heading/heading.types";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import Heading from "@/components/typographics/Heading";
import Icon from "@/components/basics/Icon";

const Accordion = ({ className, title, children, ...props }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cn = classNames("accordion", className, { "accordion--is-open": isOpen });

  const toggleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight } = contentRef.current;
      const height = isOpen ? scrollHeight : 0;
      contentRef.current.style.height = `${height}px`;
    }
  }, [isOpen]);

  return (
    <div className={cn} {...props}>
      <button className="accordion__header" onClick={toggleIsOpen} type="button">
        {title && <AccordionHeaderDefault title={title} />}
      </button>
      <div className="accordion__content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

const AccordionHeaderDefault = ({ title }: { title: string }) => {
  return (
    <div className="accordion__header-container">
      <Heading size={HeadingSizes.XSmall} className="accordion-header__title">
        {title}
      </Heading>
      <Icon className="accordion__header-container__icon-toggle" name={"chevron-down"} />
    </div>
  );
};

export default Accordion;

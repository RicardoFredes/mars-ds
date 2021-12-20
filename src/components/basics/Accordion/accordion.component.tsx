import { AccordionProps } from "./accordion.types";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import AccordionHeaderDefault from "./accordion-header-default";

const Accordion = ({ className, title, children, headerComponent, ...props }: AccordionProps) => {
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

  const HeaderComponent = headerComponent || AccordionHeaderDefault;

  return (
    <div className={cn} {...props}>
      <button className="accordion__header" onClick={toggleIsOpen} type="button">
        <HeaderComponent title={title} />
      </button>
      <div className="accordion__content" ref={contentRef}>
        <div className="accordion__content-container">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

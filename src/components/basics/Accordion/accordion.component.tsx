import { AccordionProps } from "./";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import AccordionHeaderDefault from "./accordion-header-default";

const Accordion = ({
  className,
  title,
  children,
  headerComponent,
  defaultOpen = false,
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | string>("auto");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cn = classNames("accordion", className, { "accordion--is-open": isOpen });

  const toggleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const maxHeight = contentRef.current?.scrollHeight || "auto";
    const height = isOpen ? maxHeight : 0;
    setHeight(height);
  }, [isOpen, contentRef]);

  const HeaderComponent = headerComponent || AccordionHeaderDefault;

  return (
    <div className={cn} {...props}>
      <button className="accordion__header" onClick={toggleIsOpen} type="button">
        <HeaderComponent title={title} />
      </button>
      <div
        data-testid="accordion-content"
        className="accordion__content"
        ref={contentRef}
        style={{ height }}
      >
        <div className="accordion__content-container">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

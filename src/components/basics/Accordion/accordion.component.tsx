import type { AccordionProps } from "./accordion.types";

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

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
  const [isAnimation, setIsAnimation] = useState(false);
  const [height, setHeight] = useState<number | string>("auto");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cn = classNames("accordion", className, {
    "accordion--is-open": isOpen,
    "accordion--is-animation": isAnimation,
  });

  const toggleIsOpen = () => {
    setIsAnimation(true);
    setIsOpen(!isOpen);
  };

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
        onTransitionEnd={() => setIsAnimation(false)}
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

import type { AutoScrollProps } from "./auto-scroll.types";

import classNames from "classnames";
import { useRef, useState } from "react";

const AutoScroll = ({ children, className, draggable, ...props }: AutoScrollProps) => {
  const [isDown, setIsDown] = useState(false);
  const cn = classNames("auto-slider", className, {
    "auto-slider--is-active": isDown,
    "auto-slider--draggable": draggable,
  });

  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const events = !draggable
    ? null
    : {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
      };

  return (
    <div ref={sliderRef} className={cn} {...props} {...events}>
      <div className="auto-slider__container">{children}</div>
    </div>
  );
};

export default AutoScroll;

import type { NavigationBarProps } from "./navigation-bar.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { debounce } from "@/services/debounce";

const NavigationBar = ({ className, children, ...props }: NavigationBarProps) => {
  const [lastY, setLastY] = useState(0);
  const [show, setShow] = useState(true);

  const cn = classNames("navigation-bar", className, { "navigation-bar--show": show });

  const handleScroll = () => {
    const limitY = document.body.scrollHeight - innerHeight;

    const isBottomReached = scrollY >= limitY;
    const isScrollUp = lastY > scrollY;

    setShow(isBottomReached || isScrollUp);
    setLastY(scrollY);
  };

  const debouncedHandleScroll = debounce(handleScroll, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  });

  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default NavigationBar;

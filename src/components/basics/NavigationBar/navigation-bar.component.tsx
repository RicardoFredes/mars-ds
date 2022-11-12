import type { NavigationBarProps } from "./navigation-bar.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { debounce } from "@/services/debounce";

const NavigationBar = ({ showText = true, className, children, ...props }: NavigationBarProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(true);

  const cn = classNames("navigation-bar", className, { "navigation-bar--show": show });

  const handleScroll = () => {
    const { scrollY: currentScrollY } = window;
    if (scrollY > currentScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    setScrollY(currentScrollY);
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

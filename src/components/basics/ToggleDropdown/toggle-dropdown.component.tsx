import type { ToggleDropdownProps } from "./toggle-dropdown.types";

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ClickOut from "react-simple-clickout";

import DropdownMenu from "../DropdownMenu";
import ToggleButton from "../ToggleButton";

const ToggleDropdown = ({
  className,
  componentLink,
  disabled,
  toggleButton,
  onToggle,
  list,
  defaultValue = false,
  ...props
}: ToggleDropdownProps) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const [y, setY] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [isAbove, setIsAbove] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasList = Array.isArray(list) && list.length > 0;

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  const handleY = () => {
    if (!isOpen) return;
    const diff = document.body.clientTop - window.pageYOffset;
    setY(diff);
  };

  useEffect(() => {
    if (hasList && isReady) {
      handleY();
      if (isOpen) window.addEventListener("scroll", handleY);
      else window.removeEventListener("scroll", handleY);
    }

    return () => window.removeEventListener("scroll", handleY);
  }, [isOpen, hasList, isReady]);

  const setup = () => {
    if (!dropdownRef.current) return;
    const dropdownBox = dropdownRef.current?.getBoundingClientRect();
    if (!dropdownBox) return;
    const { width, right, bottom } = dropdownBox;

    const isRightOffScreen = right + width > window.innerWidth;
    const isAboveOffScreen = bottom > window.innerHeight;

    setIsRight(isRightOffScreen);
    setIsAbove(isAboveOffScreen);
    setIsReady(true);
  };

  useEffect(() => {
    if (hasList && !isReady) setup();
  }, [dropdownRef, hasList, isReady]);

  useEffect(() => {
    if (defaultValue !== isOpen) setIsOpen(defaultValue);
  }, [defaultValue]);

  const cn = classNames("toggle-dropdown", className, {
    "toggle-dropdown--is-open": isOpen,
    "toggle-dropdown--is-ready": isReady,
    "toggle-dropdown--is-right": isRight,
    "toggle-dropdown--is-above": isAbove,
  });

  return (
    <div className={cn} {...props} onKeyDown={(e) => (e.key === "Escape" ? toggleOpen() : null)}>
      <ToggleButton
        title="Abrir mais opções para o item"
        iconName="more-vertical"
        size="sm"
        variant="text"
        {...toggleButton}
        disabled={disabled}
        onClick={toggleOpen}
      />
      {hasList && (
        <div ref={dropdownRef}>
          {(!isReady || isOpen) && (
            <ClickOut onClickOut={toggleOpen}>
              <DropdownMenu
                className="toggle-dropdown__list"
                data-testid="toggle-dropdown-list"
                style={{ "--y": `${y}px` } as any}
                size="sm"
                componentLink={componentLink}
                list={list}
                onClick={toggleOpen}
              />
            </ClickOut>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleDropdown;

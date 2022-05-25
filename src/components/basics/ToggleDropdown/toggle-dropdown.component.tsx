import type { ToggleDropdownProps } from "./toggle-dropdown.types";

import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import ClickOut from "react-simple-clickout";

import DropdownMenu from "../DropdownMenu";
import ToggleButton from "../ToggleButton";

const BUTTON_HEIGHT = 40;
const SPACING_BETWEEN_BUTTON_AND_DROPDOWN = 16;
const OFFSET = BUTTON_HEIGHT + SPACING_BETWEEN_BUTTON_AND_DROPDOWN;

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
  const [x, setX] = useState(0);
  const [h, setH] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasList = Array.isArray(list) && list.length > 0;

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  const handleY = () => {
    if (!isOpen) return;

    const bottom = dropdownRef.current?.getBoundingClientRect().bottom || 0;
    const dropdownHeight = h + OFFSET;

    const isItOffScreen = bottom + dropdownHeight > window.innerHeight;
    const diff = document.body.clientTop - window.pageYOffset;

    setY(isItOffScreen ? diff - dropdownHeight : diff);
  };

  useEffect(() => {
    if (hasList && isReady) {
      handleY();
      if (isOpen) window.addEventListener("scroll", handleY);
      else window.removeEventListener("scroll", handleY);
    }

    return () => window.removeEventListener("scroll", handleY);
  }, [isOpen, hasList, isReady]);

  useEffect(() => {
    if (hasList && dropdownRef.current && !isReady) {
      const height = dropdownRef.current?.getBoundingClientRect().height || 0;
      setH(height);

      const width = dropdownRef.current?.getBoundingClientRect().width || 0;
      const right = dropdownRef.current?.getBoundingClientRect().right || 0;
      const isRightOffScreen = right + width > window.innerWidth;
      if (isRightOffScreen) setX(-width + BUTTON_HEIGHT);

      setIsReady(true);
    }
  }, [dropdownRef, hasList, isReady]);

  useEffect(() => {
    if (defaultValue !== isOpen) setIsOpen(defaultValue);
  }, [defaultValue]);

  const cn = classNames("toggle-dropdown", className, {
    "toggle-dropdown--is-open": isOpen,
    "toggle-dropdown--is-ready": isReady,
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
                style={{ "--y": `${y}px`, "--x": `${x}px` } as any}
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

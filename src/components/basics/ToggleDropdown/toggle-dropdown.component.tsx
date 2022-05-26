import type { ToggleDropdownProps } from "./toggle-dropdown.types";

import classNames from "classnames";
import { useState } from "react";
import ClickOut from "react-simple-clickout";

import { CardElevations } from "../Card";
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
  isRight = false,
  isAbove = false,
  ...props
}: ToggleDropdownProps) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const hasList = Array.isArray(list) && list.length > 0;

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  const cn = classNames("toggle-dropdown", className, {
    "toggle-dropdown--is-open": isOpen,
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
        disabled={!hasList || disabled}
        onClick={toggleOpen}
      />

      {isOpen && !disabled && (
        <ClickOut onClickOut={toggleOpen}>
          <DropdownMenu
            elevation={CardElevations.High}
            className="toggle-dropdown__list"
            data-testid="toggle-dropdown-list"
            size="sm"
            componentLink={componentLink}
            list={list}
            onClick={toggleOpen}
          />
        </ClickOut>
      )}
    </div>
  );
};

export default ToggleDropdown;

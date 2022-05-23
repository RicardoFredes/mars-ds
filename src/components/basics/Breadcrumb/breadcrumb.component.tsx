import type { BreadCrumbItemProps, BreadcrumbProps } from "./breadcrumb.types";

import classNames from "classnames";
import { useState } from "react";
import ClickOut from "react-simple-clickout";

import Subtitle from "../../typographies/Subtitle";
import DropdownMenu from "../DropdownMenu";

const Breadcrumb = ({ className, list, componentLink = "a", ...props }: BreadcrumbProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const formattedList = [...list].splice(1, list.length - 2);
  const cn = classNames("breadcrumb", className);
  const firstBreadCrumbItem = list[0];
  const lastBreadCrumbItem = list[list.length - 1];

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div className={cn} {...props}>
      {list.length > 3 ? (
        <>
          <BreadcrumbItem componentLink={componentLink} active={false} {...firstBreadCrumbItem} />

          <div className="breadcrumb__popover-container">
            <BreadcrumbItem
              componentLink={componentLink}
              label={"..."}
              active={false}
              onClick={togglePopover}
              data-testid="breadcrumb-popover-trigger"
            />

            {popoverOpen && (
              <ClickOut onClickOut={togglePopover}>
                <DropdownMenu
                  componentLink={componentLink}
                  list={formattedList}
                  onClick={togglePopover}
                  className="breadcrumb__popover-container-list"
                  data-testid="breadcrumb-popover"
                />
              </ClickOut>
            )}
          </div>

          <BreadcrumbItem componentLink={componentLink} active={true} {...lastBreadCrumbItem} />
        </>
      ) : (
        <>
          {list.map(({ label, onClick }, index) => {
            const isActive = index === list.length - 1;
            return (
              <BreadcrumbItem
                key={index}
                componentLink={componentLink}
                label={label}
                active={isActive}
                onClick={onClick}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

const BreadcrumbItem = ({
  componentLink,
  label,
  active = false,
  onClick,
  ...props
}: BreadCrumbItemProps) => {
  const cn = classNames("breadcrumb__item", { "breadcrumb__item--is-active": active });
  const handleItemClick = () => {
    if (active === false) return onClick?.();
  };

  return (
    <Subtitle
      data-testid="breadcrumb-item"
      as={componentLink}
      className={cn}
      onClick={handleItemClick}
      {...props}
    >
      {label}
    </Subtitle>
  );
};

export default Breadcrumb;

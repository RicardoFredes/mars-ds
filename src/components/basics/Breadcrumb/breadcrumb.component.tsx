import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { BreadcrumbProps } from "./breadcrumb.types";

import classNames from "classnames";

import Subtitle from "../../typographies/Subtitle";
import Link from "../Link";
import ToggleDropdown from "../ToggleDropdown";

const Breadcrumb = ({ className, list, ...props }: BreadcrumbProps) => {
  if (!Array.isArray(list)) return null;

  const cn = classNames("breadcrumb", className);
  const arialLabel = "breadcrumbs";

  if (list.length <= 3) {
    return (
      <nav className={cn} {...props} aria-label={arialLabel}>
        <ol>
          {list.map((item, index) => (
            <BreadcrumbListItem key={index} {...item} />
          ))}
        </ol>
      </nav>
    );
  }

  const items = [...list];
  const firstItem = items.shift();
  const lastItem = items.pop();
  const toggleButton = { iconName: "more-horizontal" };

  return (
    <nav className={cn} {...props} aria-label={arialLabel}>
      <ol>
        <BreadcrumbListItem {...firstItem} />
        <li>
          <ToggleDropdown list={items} toggleButton={toggleButton} />
        </li>
        <BreadcrumbListItem {...lastItem} />
      </ol>
    </nav>
  );
};

const BreadcrumbListItem = ({ label, className, ...props }: DropdownMenuItemProps) => {
  const cn = classNames("breadcrumb__item", className);
  return (
    <li data-testid="breadcrumb-item" className={cn}>
      <Subtitle as={Link} {...props}>
        {label}
      </Subtitle>
    </li>
  );
};

export default Breadcrumb;

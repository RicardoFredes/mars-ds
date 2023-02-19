import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { BreadcrumbProps } from "./breadcrumb.types";

import classNames from "classnames";

import Text from "../../typographies/Text";
import ToggleDropdown from "../ToggleDropdown";

const Breadcrumb = ({ className, list, componentLink, ...props }: BreadcrumbProps) => {
  if (!Array.isArray(list)) return null;

  const cn = classNames("breadcrumb", className);
  const arialLabel = "breadcrumbs";

  if (list.length <= 3) {
    return (
      <nav className={cn} {...props} aria-label={arialLabel}>
        <ol>
          {list.map((item, index) => (
            <BreadcrumbListItem key={index} componentLink={componentLink} {...item} />
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
        <BreadcrumbListItem componentLink={componentLink} {...firstItem} />
        <li>
          <ToggleDropdown componentLink={componentLink} list={items} toggleButton={toggleButton} />
        </li>
        <BreadcrumbListItem componentLink={componentLink} {...lastItem} />
      </ol>
    </nav>
  );
};

const BreadcrumbListItem = ({
  componentLink,
  label,
  className,
  ...props
}: DropdownMenuItemProps) => {
  const cn = classNames("breadcrumb__item", className);
  const Component = componentLink || "a";
  return (
    <li data-testid="breadcrumb-item" className={cn}>
      <Component {...props}>
        <Text as="span">{label}</Text>
      </Component>
    </li>
  );
};

export default Breadcrumb;

import type { RangeCompletionProps } from "./range-completion.types";

import classNames from "classnames";

import Icon, { IconSizes } from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";
import { makeArray } from "@/services/array";

const RangeCompletion = ({
  label,
  iconName = "circle",
  iconSize,
  total = 5,
  value = 0,
  className,
  ...props
}: RangeCompletionProps) => {
  const cn = classNames("range-completion", className);
  const items = makeArray(total);
  return (
    <div className={cn} {...props}>
      {label && <Caption className="range-completion__label">{label}</Caption>}
      {items.map((_, index) => (
        <Icon
          key={index}
          name={iconName}
          size={iconSize || IconSizes.Small}
          data-testid={index < value ? "is-completed" : "is-empty"}
          className={classNames("range-completion__item", {
            "range-completion__item--is-checked": index < value,
          })}
        />
      ))}
    </div>
  );
};

export default RangeCompletion;

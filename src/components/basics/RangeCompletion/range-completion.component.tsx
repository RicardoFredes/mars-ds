import type { RangeCompletionProps } from "./range-completion.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";
import { makeArray } from "@/services/makeArray";

const RangeCompletion = ({
  label = "Dificuldade",
  iconName = "circle",
  total = 5,
  value = 0,
  className,
  children,
  ...props
}: RangeCompletionProps) => {
  const cn = classNames("range-completion", className);
  const items = makeArray(total);
  return (
    <div className={cn} {...props}>
      <Caption className="range-completion__label">{label || "Dificuldade"}</Caption>
      {items.map((_, index) => (
        <Icon
          key={index}
          name={iconName}
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

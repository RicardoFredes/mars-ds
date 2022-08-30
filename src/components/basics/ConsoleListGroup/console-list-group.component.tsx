import type { ConsoleListGroupProps } from "./console-list-group.types";

import classNames from "classnames";
import { useRef, useState } from "react";

import ConsoleListItem from "@/components/basics/ConsoleListItem";
import ConsoleListSubItem from "@/components/basics/ConsoleListSubItem";
import Icon from "@/components/basics/Icon";

const ConsoleListGroup = ({
  list,
  isOpen = false,
  className,
  isActive,
  showAnswer = false,
  LinkComponent,
  ...props
}: ConsoleListGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const headerProps = {
    isActive: isActive || (Array.isArray(list) && list.some(({ isActive }) => isActive)),
    ...props,
  };

  const cn = classNames("console-list-group", className, {
    "console-list-group--is-expanded": isExpanded,
  });

  const toggleOpen = () => setIsExpanded(!isExpanded);

  return (
    <div className={cn} data-testid="console-list-group">
      <ConsoleListItem
        className="console-list-group__header"
        onClick={toggleOpen}
        LinkComponent={LinkComponent}
        {...headerProps}
      >
        <Icon name={isExpanded ? "chevron-up" : "chevron-down"} />
      </ConsoleListItem>

      <div
        className="console-list-group__body"
        ref={bodyRef}
        style={isExpanded ? { height: bodyRef.current?.scrollHeight } : { height: "0" }}
      >
        {list.map((item, index) => (
          <ConsoleListSubItem
            key={index}
            showAnswer={showAnswer}
            {...item}
            LinkComponent={LinkComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default ConsoleListGroup;

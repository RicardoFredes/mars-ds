import type { ConsoleListProps } from "./console-list.types";

import classNames from "classnames";

import ConsoleListGroup from "@/components/basics/ConsoleListGroup";
import ConsoleListItem from "@/components/basics/ConsoleListItem";

const ConsoleList = ({ list, className, LinkComponent, ...props }: ConsoleListProps) => {
  const cn = classNames("console-list", className);

  return (
    <div className={cn} data-testid="console-list" {...props}>
      {Array.isArray(list) &&
        list.map(({ list: listItem, ...item }, index) => {
          const newItem = {
            ...item,
            isFirstItem: index === 0,
            isLastItem: index === list.length - 1,
          };

          if (Array.isArray(listItem)) {
            return (
              <ConsoleListGroup
                key={index}
                LinkComponent={LinkComponent}
                list={listItem}
                {...newItem}
              />
            );
          }

          return <ConsoleListItem key={index} LinkComponent={LinkComponent} {...newItem} />;
        })}
    </div>
  );
};

export default ConsoleList;

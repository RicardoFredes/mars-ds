import type { ConsoleListProps } from "./console-list.types";

import classNames from "classnames";

import ConsoleListGroup from "@/components/basics/ConsoleListGroup";
import ConsoleListItem from "@/components/basics/ConsoleListItem";

const ConsoleList = ({ list, className, LinkComponent, ...props }: ConsoleListProps) => {
  const cn = classNames("console-list", className);

  return (
    <div className={cn} {...props}>
      {Array.isArray(list) &&
        list.map(({ list: listItem, ...item }, index) => {
          if (Array.isArray(listItem)) {
            return (
              <ConsoleListGroup
                key={index}
                LinkComponent={LinkComponent}
                list={listItem}
                {...item}
              />
            );
          }

          return <ConsoleListItem key={index} LinkComponent={LinkComponent} {...item} />;
        })}
    </div>
  );
};

export default ConsoleList;

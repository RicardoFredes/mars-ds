import type { TabsProps } from "./tabs.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Button from "@/components/basics/Button";

const Tabs = ({
  className,
  tabs = [],
  defaultTabIndex = 0,
  full,
  LinkComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: TabsProps) => {
  const [currentIndex, setCurrentIndex] = useState(defaultTabIndex);
  const cn = classNames("tabs", className);

  useEffect(() => {
    if (defaultTabIndex !== currentIndex) setCurrentIndex(defaultTabIndex);
  }, [defaultTabIndex]);

  return (
    <div className={cn} {...props}>
      <div
        data-testid="tabs-header"
        className={classNames("tabs__header", { "tabs__header--is-full": full })}
      >
        {tabs.map(({ children, ...tab }, index) => (
          <Button
            {...tab}
            data-testid="tab-item"
            as={tab.href ? LinkComponent : "button"}
            size="sm"
            variant="naked"
            onClick={() => setCurrentIndex(index)}
            className={classNames("tabs__btn", {
              "tabs__btn--is-active": index === currentIndex,
            })}
            key={`tab-header-${index}`}
          />
        ))}
      </div>
      <div className="tabs__body">
        {tabs.map(({ children }, index) => (
          <div
            data-testid="tab-content"
            className={classNames("tabs__content", {
              "tabs__content--is-active": index === currentIndex,
            })}
            key={`tab-content-${index}`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

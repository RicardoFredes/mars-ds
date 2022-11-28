import type { TabsProps } from "./tabs.types";

import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";

import Button from "@/components/basics/Button";

const Tabs = ({
  className,
  style,
  tabs = [],
  defaultTabIndex = 0,
  full,
  LinkComponent,
  align = "left",
  textColorActive = "var(--color-text-primary)",
  backgroundColorActive = "var(--color-primary-500)",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: TabsProps) => {
  const [currentIndex, setCurrentIndex] = useState(defaultTabIndex);
  const cn = classNames("tabs", className);

  const cnAlign = full ? "" : `tabs__header--is-${align}`;

  const styles = useMemo(() => {
    return {
      ...style,
      "--color-text-tab-active": textColorActive,
      "--color-background-tab-active": backgroundColorActive,
    };
  }, [style, textColorActive, backgroundColorActive]);

  useEffect(() => {
    if (defaultTabIndex !== currentIndex) setCurrentIndex(defaultTabIndex);
  }, [defaultTabIndex]);

  return (
    <div className={cn} {...props}>
      <div
        data-testid="tabs-header"
        style={styles}
        className={classNames("tabs__header", cnAlign, {
          "tabs__header--is-full": full,
        })}
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

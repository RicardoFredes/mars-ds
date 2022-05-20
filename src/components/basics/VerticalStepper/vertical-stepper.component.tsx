import type { VerticalStepperProps } from "./vertical-stepper.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Link from "@/components/basics/Link";
import Subtitle from "@/components/typographies/Subtitle";
import Text from "@/components/typographies/Text";

const VerticalStepper = ({ items, className, ...props }: VerticalStepperProps) => {
  const cn = classNames("vertical-stepper", className);

  return (
    <ol className={cn} {...props}>
      {items.map(
        (
          {
            title,
            subtitle,
            link,
            icon,
            iconColor = "var(--color-background-primary)",
            circleColor = "var(--color-text-primary)",
            children,
          },
          index
        ) => {
          const itemCn = classNames("vertical-stepper__item", {
            "vertical-stepper__item--has-icon": icon,
          });

          const containerCn = classNames("vertical-stepper__container", {
            "vertical-stepper__container--has-icon": icon,
          });

          const circleCn = classNames("vertical-stepper__circle", {
            "vertical-stepper__circle--has-icon": icon,
          });

          return (
            <li className={itemCn} key={index}>
              <Link {...link}>
                <div className={containerCn}>
                  <div
                    className={circleCn}
                    data-testid="vertical-stepper__circle"
                    style={{ backgroundColor: circleColor }}
                  >
                    {icon && (
                      <Icon
                        name={icon}
                        className="vertical-stepper__icon"
                        data-testid="vertical-stepper__icon"
                        color={iconColor}
                      />
                    )}
                  </div>

                  <div className="vertical-stepper__content">
                    <Text className="vertical-stepper__title" data-testid="vertical-stepper__title">
                      {title}
                    </Text>
                    {subtitle && (
                      <Subtitle
                        className="vertical-stepper__subtitle"
                        data-testid="vertical-stepper__subtitle"
                      >
                        {subtitle}
                      </Subtitle>
                    )}
                  </div>
                </div>
              </Link>

              {children && (
                <div
                  className="vertical-stepper__children"
                  data-testid="vertical-stepper__children"
                >
                  {children}
                </div>
              )}
            </li>
          );
        }
      )}
    </ol>
  );
};

export default VerticalStepper;

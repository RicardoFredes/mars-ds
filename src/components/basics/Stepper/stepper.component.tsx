import type { StepperProps } from "./stepper.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Subtitle, { SubtitleSizes } from "@/components/typographies/Subtitle";

const Stepper = ({ steps, position = 0, className, ...props }: StepperProps) => {
  const cn = classNames("stepper", className);
  return (
    <div className={cn} {...props}>
      {steps.map((label, index) => {
        const stepPosition = index + 1;
        const isActive = stepPosition === position;
        const isDone = stepPosition < position;
        return (
          <Subtitle
            size={SubtitleSizes.Small}
            as="div"
            key={stepPosition}
            className={classNames("stepper__item", {
              "stepper__item--is-active": isActive,
              "stepper__item--is-done": isDone,
            })}
          >
            <div className="stepper__status">
              {!isDone ? (
                <span className="stepper__status-position">{stepPosition}</span>
              ) : (
                <Icon className="stepper__status-icon" name="checkmark-circle" />
              )}
            </div>
            <div className="stepper__label">{label}</div>
          </Subtitle>
        );
      })}
    </div>
  );
};

export default Stepper;

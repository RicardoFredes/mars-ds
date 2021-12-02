import type { StepperProps } from "./stepper.types";
import { SubtitlesSizes } from "../typographic/Subtitle/subtitle.types";

import classNames from "classnames";

import Icon from "../Icon/icon.component";
import Subtitle from "../typographic/Subtitle/subtitle.component";

const Stepper = ({ steps, currentPosition = 0 }: StepperProps) => {
  return (
    <div className="stepper">
      {steps.map((label, index) => {
        const position = index + 1;
        const isActive = position === currentPosition;
        const isDone = position < currentPosition;
        return (
          <Subtitle
            size={SubtitlesSizes.Small}
            as="div"
            key={position}
            className={classNames("stepper__item", {
              "stepper__item--is-active": isActive,
              "stepper__item--is-done": isDone,
            })}
          >
            <div className="stepper__status">
              {!isDone ? (
                <span className="stepper__status-position">{position}</span>
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

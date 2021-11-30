import Icon from "../Icon/icon.component";
import classNames from "classnames";
import Subtitle from "../typographic/Subtitle/subtitle.component";
import Text from "../typographic/Text/text.component";
import type { StepperProps } from "./stepper.types";

const Stepper = ({ steps, position = 0 }: StepperProps) => {
  const cn = classNames("stepper");
  return (
    <div className={cn}>
      {steps.map((step, index) => {
        const isActive = index === position;
        const isInactive = index > position;
        const isDone = index < position;
        return (
          <>
            <div className="steps">
              <Subtitle
                as="span"
                size="s"
                className={classNames("steps--index", {
                  "steps--index--is-active": isActive,
                  "steps--index--is-inactive": isInactive,
                  "steps--index--is-done": isDone,
                })}
              >
                {!isDone ? index + 1 : <Icon name="checkmark-circle" />}
              </Subtitle>
              <Text
                className={classNames("steps--step", {
                  "steps--step--is-active": isActive,
                  "steps--step--is-inactive": isInactive,
                })}
              >
                {step}
              </Text>
            </div>
            {index < steps.length - 1 && <span className="steps--separator"></span>}
          </>
        );
      })}
    </div>
  );
};

export default Stepper;

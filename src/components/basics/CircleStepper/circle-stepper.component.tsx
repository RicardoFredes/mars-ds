import type { CircleStepperProps } from "./circle-stepper.types";

import classNames from "classnames";
import { StepperProps } from "../Stepper/stepper.types";
import { HeadingSizes } from "@/components/typographics/Heading/heading.types";
import Heading from "@/components/typographics/Heading";
import Caption from "@/components/typographics/Caption";
import Text from "@/components/typographics/Text";

const CircleStepper = ({ position, steps }: StepperProps) => {
  const cn = classNames("circleStepper");
  const totalSteps = steps.length;
  const getCurrentPosition = () => {
    if (position < 0) return 0;
    if (position > totalSteps) return totalSteps;
    return position;
  };

  const currentPosition = getCurrentPosition();
  return (
    <div className={cn}>
      <div className="circleStepper__info">
        <Heading size={HeadingSizes.Small} className="circleStepper__info__title">
          {steps[position - 1]}
        </Heading>
        {position < steps.length && position > 0 && (
          <Caption as="p" className="circleStepper__info__caption">
            Próximo:&nbsp;
            <Text as="span" className="circleStepper__info__caption__nextPosition">
              {steps[position]}
            </Text>
          </Caption>
        )}
      </div>

      <div className="circleStepper__icon">
        <svg className="circleStepper__icon__svg" viewBox="0 0 100 100" width="52" height="52">
          <circle
            className="circleStepper__icon__svg__innerCircle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
          />
          <circle
            className="circleStepper__icon__svg__outerCircle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
            strokeDasharray={totalSteps}
            strokeDashoffset={currentPosition * -1 - totalSteps}
          />
        </svg>
        <h2 className="circleStepper__icon__number">
          <span className="circleStepper__icon__position">{position}</span>
          {"/"}
          <span className="circleStepper__icon__totalSteps">{totalSteps}</span>
        </h2>
      </div>
    </div>
  );
};

export default CircleStepper;

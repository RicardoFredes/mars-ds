import type { CircleStepperProps } from "./circle-stepper.types";

import classNames from "classnames";

import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import Text from "@/components/typographies/Text";

const CircleStepper = ({
  position,
  steps,
  hideInfo = false,
  className,
  ...props
}: CircleStepperProps) => {
  const cn = classNames("circle-stepper", className);
  const totalSteps = steps.length;
  const getCurrentPosition = () => {
    if (position < 0) return 0;
    if (position > totalSteps) return totalSteps;
    return position;
  };

  const currentPosition = getCurrentPosition();
  return (
    <div className={cn} {...props}>
      {!hideInfo && (
        <div className="circle-stepper__info">
          <>
            <Heading size={HeadingSizes.Small} className="circle-stepper__info-title">
              {steps[position - 1]}
            </Heading>

            {position < steps.length && position > 0 && (
              <Caption as="p" className="circle-stepper__info-caption">
                Próximo:&nbsp;
                <Text as="span" className="circle-stepper__info-caption__next-position">
                  {steps[position]}
                </Text>
              </Caption>
            )}
          </>
        </div>
      )}

      <div className="circle-stepper__icon">
        <svg className="circle-stepper__icon__svg" viewBox="0 0 100 100" width="52" height="52">
          <circle
            className="circle-stepper__icon__svg-inner-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
          />
          <circle
            className="circle-stepper__icon__svg-outer-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
            strokeDasharray={totalSteps}
            strokeDashoffset={currentPosition * -1 - totalSteps}
          />
        </svg>
        <h2 className="circle-stepper__icon-number">
          <span className="circle-stepper__icon-position">{position}</span>
          {"/"}
          <span className="circle-stepper__icon-total-steps">{totalSteps}</span>
        </h2>
      </div>
    </div>
  );
};

export default CircleStepper;

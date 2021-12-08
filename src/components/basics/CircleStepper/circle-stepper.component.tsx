import type { CircleStepperProps } from "./circle-stepper.types";

import classNames from "classnames";

const CircleStepper = ({ position, totalSteps }: CircleStepperProps) => {
  const cn = classNames("circleStepper");
  const getCurrentPosition = () => {
    if (position < 0) return 0;
    if (position > totalSteps) return totalSteps;
    return position;
  };

  const currentPosition = getCurrentPosition();
  return (
    <div className={cn}>
      <svg className="circleStepper__svg" viewBox="0 0 100 100" width="52" height="52">
        <circle
          className="circleStepper__svg__innerCircle"
          cx="50%"
          cy="50%"
          r="47%"
          pathLength={totalSteps}
        />
        <circle
          className="circleStepper__svg__outerCircle"
          cx="50%"
          cy="50%"
          r="47%"
          pathLength={totalSteps}
          strokeDasharray={totalSteps}
          strokeDashoffset={currentPosition * -1 - totalSteps}
        />
      </svg>
      <h2 className="circleStepper__number">
        <span className="circleStepper__position">{position}</span>
        {"/"}
        <span className="circleStepper__totalSteps">{totalSteps}</span>
      </h2>
    </div>
  );
};

export default CircleStepper;
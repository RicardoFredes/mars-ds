import type { CircleProgressProps } from "./circle-progress.types";

import classNames from "classnames";

import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import ListItem from "@/components/typographies/ListItem";
import Text from "@/components/typographies/Text";

const CircleProgress = ({
  position,
  steps,
  showInfo = true,
  color = "var(--color-success-700)",
  className,
  ...props
}: CircleProgressProps) => {
  const cn = classNames("circle-progress", className);
  const totalSteps = steps?.length ?? 0;

  const getCurrentPosition = () => {
    if (position < 0) return 0;
    if (position > totalSteps) return totalSteps;
    return position;
  };

  const currentPosition = getCurrentPosition();
  const currentPositionInPercent = ((position / totalSteps) * 100).toFixed(0);
  const numberColor = currentPositionInPercent === "0" ? "var(--color-text-disabled)" : color;
  const hasNext = position < steps.length && position > 0;

  return (
    <div className={cn} {...props}>
      {showInfo && (
        <div className="circle-progress__info">
          <>
            <Heading size={HeadingSizes.Small} className="circle-progress__info-title">
              {steps[position - 1]}
            </Heading>

            {hasNext && (
              <Caption as="p" className="circle-progress__info-caption">
                Próximo:&nbsp;
                <Text as="span" className="circle-progress__info-caption__next-position">
                  {steps[position]}
                </Text>
              </Caption>
            )}
          </>
        </div>
      )}

      <div className="circle-progress__icon">
        <svg className="circle-progress__icon__svg" viewBox="0 0 100 100" width="52" height="52">
          <circle
            className="circle-progress__icon__svg-inner-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
          />
          <circle
            className="circle-progress__icon__svg-outer-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={totalSteps}
            strokeDasharray={totalSteps}
            strokeDashoffset={currentPosition * -1 - totalSteps}
            style={{ stroke: color }}
          />
        </svg>
        <h2 className="circle-progress__icon-number">
          <ListItem
            className="circle-progress__icon-position"
            style={{ color: numberColor }}
          >{`${currentPositionInPercent}%`}</ListItem>
        </h2>
      </div>
    </div>
  );
};

export default CircleProgress;

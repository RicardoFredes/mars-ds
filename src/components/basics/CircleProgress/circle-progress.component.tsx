import type { CircleProgressProps } from "./circle-progress.types";

import classNames from "classnames";

import Text from "@/components/typographies/Text";

const CircleProgress = ({
  percent,
  color = "var(--color-success-700)",
  className,
  ...props
}: CircleProgressProps) => {
  const cn = classNames("circle-progress", className);
  const numberColor = percent === 0 ? "var(--color-text-disabled)" : color;

  return (
    <div className={cn} {...props}>
      <div className="circle-progress__icon">
        <svg className="circle-progress__icon__svg" viewBox="0 0 100 100" width="52" height="52">
          <circle
            className="circle-progress__icon__svg-inner-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={100}
          />
          <circle
            className="circle-progress__icon__svg-outer-circle"
            cx="50%"
            cy="50%"
            r="47%"
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={percent * -1 - 100}
            style={{ stroke: color }}
          />
        </svg>
        <h2 className="circle-progress__icon-number">
          <Text className="circle-progress__icon-position" style={{ color: numberColor }} as="span">
            <span>{`${percent.toFixed()}%`}</span>
          </Text>
        </h2>
      </div>
    </div>
  );
};

export default CircleProgress;

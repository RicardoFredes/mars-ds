import type { ProgressIndicatorProps } from "./progress-indicator.types";

import classNames from "classnames";

const ProgressIndicator = ({
  className,
  fetching = false,
  fetched = false,
  ...props
}: ProgressIndicatorProps) => {
  const cn = classNames("progress-indicator", className, {
    "progress-indicator--is-fetching": fetching,
    "progress-indicator--is-fetched": fetched,
  });

  return <div className={cn} {...props} />;
};

export default ProgressIndicator;

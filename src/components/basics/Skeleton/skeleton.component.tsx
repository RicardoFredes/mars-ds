import type { SkeletonProps } from "./skeleton.types";

import classNames from "classnames";

const Skeleton = ({ children, className, active }: SkeletonProps) => {
  if (!active) return <div className={className}>{children}</div>;
  const cn = classNames("skeleton", className, { ["skeleton--is-active"]: active });
  return (
    <div className={cn}>
      <div className="skeleton-container">{children}</div>
    </div>
  );
};

export default Skeleton;

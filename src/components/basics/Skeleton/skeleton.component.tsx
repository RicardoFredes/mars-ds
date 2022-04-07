import type { SkeletonProps } from "./skeleton.types";

import classNames from "classnames";

import { SkeletonVariants } from "./skeleton.types";

const Skeleton = ({
  variant = SkeletonVariants.Default,
  height,
  width,
  children,
  className,
  active,
}: SkeletonProps) => {
  if (!active) return <div className={className}>{children}</div>;
  const skeletonClassNames = classNames("skeleton", `skeleton--is-${variant}`);
  const cn = classNames(skeletonClassNames, className);
  const style = { height, width };

  if (variant === SkeletonVariants.Paragraph) {
    return (
      <div className={className} data-testid="skeleton">
        {[100, 100, 90, 30].map((value, key) => (
          <div
            key={key}
            className={skeletonClassNames}
            style={{ width: `${value}%` }}
            data-testid="skeleton-paragraph"
          />
        ))}
      </div>
    );
  }
  return (
    <div className={cn} style={style} data-testid="skeleton">
      <div className="skeleton-container">{children}</div>
    </div>
  );
};

export default Skeleton;

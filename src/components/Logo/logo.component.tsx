import type { LogoProps } from "./logo.types";

import classNames from "classnames";

import { ColorsEnum } from "@/types";
import variants from "./variants";

const Logo = ({
  variant = "full",
  color = ColorsEnum.Primary,
  width,
  className,
  ...props
}: LogoProps) => {
  const Component = variants[variant];
  if (!Component) return null;

  const cn = classNames("logo", `logo__${variant}`, `logo__${variant}--${color}`, className);

  return (
    <span {...props} className={cn}>
      <Component width={width} />
    </span>
  );
};

export default Logo;

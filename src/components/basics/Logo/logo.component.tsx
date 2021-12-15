import type { LogoProps } from "./logo.types";

import classNames from "classnames";

import { LogoNames, LogoVariants } from "./logo.types";
import variants from "./icons";

const Logo = ({
  name = LogoNames.Full,
  variant = LogoVariants.Primary,
  height,
  className,
  ...props
}: LogoProps) => {
  const Component = variants[name];
  if (!Component) return null;

  const cn = classNames("logo", `logo--${variant}`, `logo-${name}`, className);

  return (
    <span {...props} className={cn}>
      <Component height={height} />
    </span>
  );
};

export default Logo;

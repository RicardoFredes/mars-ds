import type { LogoProps } from "./logo.types";

import classNames from "classnames";

import { LogoNameEnums, LogoVariantsEnum } from "./logo.types";
import variants from "./icons";

const Logo = ({
  name = LogoNameEnums.Full,
  variant = LogoVariantsEnum.Primary,
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

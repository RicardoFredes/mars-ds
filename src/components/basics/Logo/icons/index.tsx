import type { LogoIconProps } from "../logo.types";

import full from "./full";
import short from "./short";

const icons: {
  [key: string]: (props: LogoIconProps) => JSX.Element;
} = {
  full,
  short,
};

export default icons;

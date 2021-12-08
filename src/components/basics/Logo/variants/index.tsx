import type { LogoVariantProps } from "../logo.types";

import full from "./full";
import short from "./short";

const icons: {
  [key: string]: (props: LogoVariantProps) => JSX.Element;
} = {
  full,
  short,
};

export default icons;

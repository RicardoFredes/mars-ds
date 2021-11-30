import type { IconLibProps } from "@/components/Icon/icon.types";

import alertCircle from "./alert-circle";
import checkmarkCircle from "./checkmark-circle";
import eye from "./eye";
import eyeOff from "./eye-off";
import mesalvaMini from "./me-salva-mini";
import ppl from "./ppl";
import tri from "./tri";
import info from "./info";
import shield from "./shield";
import chevronDown from "./chevron-down";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  "alert-circle": alertCircle,
  "checkmark-circle": checkmarkCircle,
  "chevron-down": chevronDown,
  "eye-off": eyeOff,
  eye,
  info,
  "me-salva-mini": mesalvaMini,
  ppl,
  shield,
  tri,
};

export default icons;

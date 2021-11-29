import type { IconLibProps } from "@/components/Icon/icon.types";

import alertCircle from "./alert-circle";
import checkmarkCircle from "./checkmark-circle";
import creditCard from "./credit-card";
import eye from "./eye";
import eyeOff from "./eye-off";
import facebook from "./facebook";
import google from "./google";
import mesalvaMini from "./me-salva-mini";
import ppl from "./ppl";
import tri from "./tri";
import info from "./info";
import shield from "./shield";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  "alert-circle": alertCircle,
  "checkmark-circle": checkmarkCircle,
  "credit-card": creditCard,
  "eye-off": eyeOff,
  eye,
  facebook,
  google,
  info,
  "me-salva-mini": mesalvaMini,
  ppl,
  shield,
  tri,
};

export default icons;

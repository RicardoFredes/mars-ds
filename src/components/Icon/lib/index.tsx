import type { IconLibProps } from "@/components/Icon/icon.types";

import apple from "./apple";
import alertCircle from "./alert-circle";
import bankSlip from "./bank-slip";
import checkmarkCircle from "./checkmark-circle";
import copy from "./copy";
import creditCard from "./credit-card";
import eye from "./eye";
import eyeOff from "./eye-off";
import facebook from "./facebook";
import google from "./google";
import mastercard from "./mastercard";
import mesalvaMini from "./me-salva-mini";
import pix from "./pix";
import ppl from "./ppl";
import print from "./print";
import tri from "./tri";
import info from "./info";
import shield from "./shield";
import visa from "./visa";
import chevronDown from "./chevron-down";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  apple,
  "alert-circle": alertCircle,
  bankSlip,
  "checkmark-circle": checkmarkCircle,
  copy,
  "credit-card": creditCard,
  "chevron-down": chevronDown,
  "eye-off": eyeOff,
  eye,
  facebook,
  google,
  info,
  mastercard,
  "me-salva-mini": mesalvaMini,
  pix,
  ppl,
  print,
  shield,
  tri,
  visa,
};

export default icons;

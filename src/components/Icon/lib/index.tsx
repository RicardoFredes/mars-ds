import type { IconLibProps } from "@/components/Icon/icon.types";

import apple from "./apple";
import alertCircle from "./alert-circle";
import arrowBack from "./arrow-back";
import bankSlip from "./bank-slip";
import checkmarkCircle from "./checkmark-circle";
import chevronLeft from "./chevron-left";
import chevronRight from "./chevron-right";
import chevronUp from "./chevron-up";
import copy from "./copy";
import close from "./close";
import creditCard from "./credit-card";
import doneAll from "./done-all";
import download from "./download";
import eye from "./eye";
import eyeOff from "./eye-off";
import facebook from "./facebook";
import google from "./google";
import mastercard from "./mastercard";
import menu from "./menu";
import mesalvaMini from "./me-salva-mini";
import moreHorizontal from "./more-horizontal";
import pix from "./pix";
import ppl from "./ppl";
import print from "./print";
import tri from "./tri";
import info from "./info";
import search from "./search";
import shield from "./shield";
import visa from "./visa";
import chevronDown from "./chevron-down";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  apple,
  "alert-circle": alertCircle,
  "arrow-back": arrowBack,
  bankSlip,
  "checkmark-circle": checkmarkCircle,
  copy,
  close,
  "credit-card": creditCard,
  "chevron-down": chevronDown,
  "chevron-left": chevronLeft,
  "chevron-right": chevronRight,
  "chevron-up": chevronUp, 
  "done-all": doneAll,
  download,
  "eye-off": eyeOff,
  eye,
  facebook,
  google,
  info,
  mastercard,
  menu,
  "me-salva-mini": mesalvaMini,
  "more-horizontal": moreHorizontal,
  pix,
  ppl,
  print,
  search,
  shield,
  tri,
  visa,
};

export default icons;

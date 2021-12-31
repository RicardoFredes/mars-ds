import type { IconLibProps } from "@/components/basics/Icon/icon.types";

import apple from "./apple";
import alertCircle from "./alert-circle";
import alert from "./alert";
import arrowBack from "./arrow-back";
import attach from "./attach";
import bankSlip from "./bank-slip";
import checkmarkCircle from "./checkmark-circle";
import checkmarkSquare from "./checkmark-square";
import chevronLeft from "./chevron-left";
import chevronRight from "./chevron-right";
import chevronUp from "./chevron-up";
import clock from "./clock";
import copy from "./copy";
import close from "./close";
import creditCard from "./credit-card";
import doneAll from "./done-all";
import download from "./download";
import eye from "./eye";
import eyeOff from "./eye-off";
import edit from "./edit";
import expand from "./expand";
import externalLink from "./external-link";
import facebook from "./facebook";
import file from "./file";
import fileText from "./file-text";
import google from "./google";
import grid from "./grid";
import mastercard from "./mastercard";
import menu from "./menu";
import minusSquare from "./minus-square";
import mesalvaMini from "./me-salva-mini";
import moreHorizontal from "./more-horizontal";
import pix from "./pix";
import ppl from "./ppl";
import print from "./print";
import radioButtonOff from "./radio-button-off";
import radioButtonOn from "./radio-button-on";
import tri from "./tri";
import info from "./info";
import layers from "./layers";
import list from "./list";
import search from "./search";
import shield from "./shield";
import shoppingCart from "./shopping-cart";
import square from "./square";
import star from "./star";
import video from "./video";
import visa from "./visa";
import chevronDown from "./chevron-down";
import checkmark from "./checkmark";
import trash from "./trash";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  apple,
  "alert-circle": alertCircle,
  alert,
  "arrow-back": arrowBack,
  "attach": attach,
  "bank-slip": bankSlip,
  "checkmark-circle": checkmarkCircle,
  checkmark,
  "checkmark-square": checkmarkSquare,
  copy,
  close,
  "credit-card": creditCard,
  "chevron-down": chevronDown,
  "chevron-left": chevronLeft,
  "chevron-right": chevronRight,
  "chevron-up": chevronUp,
  clock,
  "done-all": doneAll,
  download,
  "eye-off": eyeOff,
  eye,
  edit,
  expand,
  "external-link": externalLink,
  facebook,
  file,
  "file-text": fileText,
  google,
  grid,
  info,
  layers,
  list,
  mastercard,
  menu,
  "minus-square": minusSquare,
  "me-salva-mini": mesalvaMini,
  "more-horizontal": moreHorizontal,
  pix,
  ppl,
  print,
  "radio-button-off": radioButtonOff,
  "radio-button-on": radioButtonOn,
  search,
  shield,
  "shopping-cart": shoppingCart,
  square,
  star,
  tri,
  video,
  visa,
  trash,
};

export default icons;

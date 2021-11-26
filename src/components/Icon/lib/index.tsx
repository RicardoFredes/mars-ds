import type { IconLibProps } from "@/components/Icon/icon.types";

import alertCircle from "./alert-circle";
import checkmarkCircle from "./checkmark-circle";
import eye from "./eye";
import eyeOff from "./eye-off";
import mesalvaMini from "./me-salva-mini";
import ppi from "./ppi";
import tri from "./tri";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  'alert-circle': alertCircle,
  'checkmark-circle': checkmarkCircle,
  'eye-off': eyeOff,
  eye,
  'me-salva-mini': mesalvaMini,
  ppi,
  tri
};

export default icons;

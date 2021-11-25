import { Variants } from "../../types";

export enum IconButtonSizes {
    Small = "small",
    Medium = "medium",
  }
  
  export interface IconButton extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
    variant?: Variants;
    labelIconButton?: string;
    size?: IconButtonSizes;
    IconName?: string;
    state?: string;
    icon?: boolean;    
  }
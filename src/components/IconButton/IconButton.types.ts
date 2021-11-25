import { Variants } from "../../types";

export enum IconButtonSizes {
    Small = "small",
    Medium = "medium",
  }
  
  export interface IconButtonProps extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
    as?: JSX.Element;
    variant?: Variants;
    labelIconButton?: string;
    size?: IconButtonSizes;
    IconName?: string;
    state?: string;
    icon?: boolean;    
  }
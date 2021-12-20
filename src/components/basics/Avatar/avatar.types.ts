import { Sizes } from "@/types";

const { XSmall, Small, Medium, Large, XLarge } = Sizes;
export const AvatarSizes = { XSmall, Small, Medium, Large, XLarge };

export interface AvatarProps extends Omit<React.HTMLProps<HTMLDivElement>, "size"> {
  name?: string;
  thumbnail?: string;
  size?: typeof AvatarSizes[keyof typeof AvatarSizes];
}

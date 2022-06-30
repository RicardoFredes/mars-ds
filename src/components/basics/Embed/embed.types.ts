import type { ButtonProps } from "../Button";

export const EmbedSizes = {
  Default: "default",
  Landscape: "landscape",
  Portrait: "portrait",
} as const;

interface EmbedProps extends Omit<React.HTMLProps<HTMLObjectElement>, "size"> {
  src?: string;
  type?: string;
  size?: typeof EmbedSizes[keyof typeof EmbedSizes];
  variantButton?: ButtonProps["variant"];
  target?: ButtonProps["target"];
  textButton?: string;
  messageDownload?: string;
}

export type { EmbedProps };

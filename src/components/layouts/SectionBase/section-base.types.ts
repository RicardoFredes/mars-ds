import { ContainerProps } from "@/components/layouts/Container";

interface BackgroundImageProps {
  sm?: string;
  md?: string;
  lg?: string;
}

interface SectionBaseProps extends ContainerProps {
  backgroundColor?: string;
  backgroundImage?: BackgroundImageProps;
  backgroundImageLeft?: BackgroundImageProps;
  backgroundImageRight?: BackgroundImageProps;
  color?: string;
  as?: string;
}

export type { SectionBaseProps, BackgroundImageProps };

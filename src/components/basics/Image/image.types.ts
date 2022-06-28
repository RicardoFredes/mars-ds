import type { HTMLAttributes } from "react";

interface ImageSourceProps extends ImageItem {
  media?: string;
  mediaSize?: number;
}

interface ImageItem {
  src?: string;
  darkModeSrc?: string;
  height?: string | number;
  width?: string | number;
}

interface ImageItemProps extends ImageItem {
  sm?: ImageItem;
  md?: ImageItem;
  lg?: ImageItem;
}

interface ImageProps extends HTMLAttributes<HTMLImageElement>, ImageItemProps {
  autoDarkMode?: boolean;
  maxHeight?: string | number;
}

export type { ImageProps, ImageSourceProps };

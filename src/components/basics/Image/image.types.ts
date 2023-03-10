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
  disableDarkMode?: boolean;
}

interface ImageItemProps extends ImageItem {
  sm?: ImageItem;
  md?: ImageItem;
  lg?: ImageItem;
}

interface ImageProps extends HTMLAttributes<HTMLPictureElement>, ImageItemProps {
  alt?: string;
  autoDarkMode?: boolean;
  maxHeight?: string | number;
}

export type { ImageProps, ImageSourceProps, ImageItem };

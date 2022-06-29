import type { ImageProps, ImageSourceProps } from "./image.types";

import classNames from "classnames";

const Image = ({
  autoDarkMode,
  className,
  src,
  height,
  width,
  sm,
  md,
  lg,
  darkModeSrc,
  title,
  maxHeight,
  alt,
  ...props
}: ImageProps) => {
  const cn = classNames("image", className, { "image--auto-invert-color": autoDarkMode });
  const defaultSrc = src || sm?.src || md?.src || lg?.src;

  if (!defaultSrc) return null;

  const defaultHeight = height || sm?.height || md?.height || lg?.height;
  const defaultWidth = width || sm?.width || md?.width || lg?.width;
  const style = { maxHeight };
  const commonProps = { height: defaultHeight, width: defaultWidth, style };

  return (
    <picture data-testid="image" className={cn} {...props}>
      {darkModeSrc && (
        <source srcSet={darkModeSrc} media="(prefers-color-scheme: dark)" {...commonProps} />
      )}
      {md && <ImageSource mediaSize={640} darkModeSrc={darkModeSrc} {...md} />}
      {lg && <ImageSource mediaSize={960} darkModeSrc={darkModeSrc} {...lg} />}
      <img src={defaultSrc} alt={alt || title} {...commonProps} />
    </picture>
  );
};

const ImageSource = ({ darkModeSrc, src, height, width, media, mediaSize }: ImageSourceProps) => {
  const m = media || `(min-width: ${mediaSize}px)`;
  const md = media || `${m} and (prefers-color-scheme: dark)`;
  const style = { maxHeight: height };
  const commonProps = { height, width, style };
  return (
    <>
      <source media={m} srcSet={src} {...commonProps} />
      {darkModeSrc && <source media={md} srcSet={darkModeSrc} {...commonProps} />}
    </>
  );
};

export default Image;

import type { ImageProps, ImageSourceProps } from "./image.types";

import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";

import { isDarkModeForced, isLightModeForced } from "@/services/theme-mode";

import Skeleton from "../Skeleton";
import { parseImageSources } from "./image.helpers";

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
  const [forceDarkMode, setForceDarkMode] = useState(false);
  const [forceLightMode, setForceLightMode] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isDarkModeForced()) {
      setForceDarkMode(true);
    } else {
      setForceLightMode(isLightModeForced());
    }
    setReady(true);
  }, []);

  const images = useMemo(
    () => parseImageSources({ src, darkModeSrc, forceDarkMode, sm, md, lg }),
    [darkModeSrc, forceDarkMode, lg, md, sm, src]
  );
  if (Object.values(images).every((value) => !value)) return null;

  const defaultHeight = height || sm?.height || md?.height || lg?.height;
  const defaultWidth = width || sm?.width || md?.width || lg?.width;

  if (!ready) return <Skeleton active width={defaultWidth} height={defaultHeight} />;

  const style = { maxHeight };
  const commonProps = { height: defaultHeight, width: defaultWidth, style };
  const cn = classNames("image", className, { "image--auto-invert-color": autoDarkMode });

  return (
    <picture data-testid="image" className={cn} {...props}>
      {!forceLightMode && darkModeSrc && (
        <source media={"(prefers-color-scheme: dark)"} srcSet={darkModeSrc} />
      )}
      {images.sm && (
        <ImageSource mediaSize={300} {...sm} src={images.sm} disableDarkMode={forceLightMode} />
      )}
      {images.md && (
        <ImageSource mediaSize={640} {...md} src={images.md} disableDarkMode={forceLightMode} />
      )}
      {images.lg && (
        <ImageSource mediaSize={920} {...lg} src={images.lg} disableDarkMode={forceLightMode} />
      )}
      <img data-testid="img" src={images.xs} alt={alt || title} {...commonProps} />
    </picture>
  );
};

const ImageSource = ({
  darkModeSrc,
  src,
  height,
  width,
  media,
  mediaSize,
  disableDarkMode,
}: ImageSourceProps) => {
  const m = media || `(min-width: ${mediaSize}px)`;
  const style = { maxHeight: height };
  const commonProps = { height, width, style };

  if (disableDarkMode || !darkModeSrc) {
    return <source media={m} srcSet={src} {...commonProps} />;
  }

  const md = media || `${m} and (prefers-color-scheme: dark)`;
  return (
    <>
      <source media={m} srcSet={src} {...commonProps} />
      {<source media={md} srcSet={darkModeSrc} {...commonProps} />}
    </>
  );
};

export default Image;

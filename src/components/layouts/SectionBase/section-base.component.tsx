import type { BackgroundImageProps, SectionBaseProps } from "./section-base.types";

import Container from "@/components/layouts/Container";
import classNames from "classnames";

const SectionBase = ({
  as,
  children,
  className,
  align,
  container,
  backgroundColor,
  backgroundImage,
  backgroundImageLeft,
  backgroundImageRight,
  color,
  style,
  ...props
}: SectionBaseProps) => {
  const cn = classNames("section-base", className, `section-base--${container}`);
  const stl = {
    backgroundColor,
    color,
    ...style,
    ...getBackgroundImagePosition("center", backgroundImage),
    ...getBackgroundImagePosition("left", backgroundImageLeft),
    ...getBackgroundImagePosition("right", backgroundImageRight),
  };
  const Tag: any = as || "section";
  return (
    <Tag className={cn} style={stl} {...props}>
      <Container container={container} align={align}>
        {children}
      </Container>
    </Tag>
  );
};

const getBackgroundImagePosition = (
  position: "center" | "left" | "right",
  background?: BackgroundImageProps
) => {
  const { sm, md, lg } = background || {};
  const urlSm = sm;
  const urlMd = md || sm;
  const urlLg = lg || urlMd;
  return {
    [`--background-image-${position}-sm`]: urlSm ? `url(${urlSm})` : "none",
    [`--background-image-${position}-md`]: urlMd ? `url(${urlMd})` : "none",
    [`--background-image-${position}-lg`]: urlLg ? `url(${urlLg})` : "none",
  };
};

export default SectionBase;

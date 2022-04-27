import type { AvatarProps } from "./avatar.types";

import classNames from "classnames";
import { useMemo } from "react";

import ItemText from "@/components/typographies/ItemText";
import { getInitialsByFullName } from "@/services/names-parser";

import { AvatarSizes } from "./avatar.types";

const Avatar = ({
  className,
  children,
  name,
  thumbnail,
  size = AvatarSizes.Medium,
  style,
  ...props
}: AvatarProps) => {
  const cn = classNames("avatar", className, `avatar--size-${size}`);
  const initials = useMemo(() => getInitialsByFullName(name) || "?", [name]);
  const styleComputed = useMemo(
    () => ({ ...style, backgroundImage: thumbnail && `url(${thumbnail})` }),
    [thumbnail, style]
  );
  return (
    <div className={cn} style={styleComputed} {...props}>
      {children}
      {!thumbnail && <ItemText className="avatar__initials">{initials}</ItemText>}
    </div>
  );
};

export default Avatar;

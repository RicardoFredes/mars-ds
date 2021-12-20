import { AvatarProps, AvatarSizes } from "./avatar.types";
import classNames from "classnames";
import { useMemo } from "react";
import { ItemText } from "@/index";

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
  const initials = useMemo(() => getLettersByName(name) || "?", [name]);
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

export const getLettersByName = (name?: string) => {
  if (!name) return "";
  const getLetter = (letter?: string) => letter?.toLocaleUpperCase() || "";
  let result = getLetter(name[0]);
  let getNext = false;
  for (let i = 1; result.length < 2 && i < name.length; i++) {
    const letter = name[i] || "";
    if (letter === " ") {
      getNext = true;
      continue;
    }
    if (getNext) result += getLetter(letter);
  }
  return result;
};

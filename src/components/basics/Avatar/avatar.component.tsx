import type { AvatarProps } from "./avatar.types";
import classNames from "classnames";

const Avatar = ({ className, children, ...props }: AvatarProps) => {
  const cn = classNames("avatar", className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Avatar;

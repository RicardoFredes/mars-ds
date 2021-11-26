import type { MouseEvent } from "react";
import classNames from "classnames";

import { Variants } from "../../types";
import { IconButtonSizes, IconButtonProps } from './IconButton.types'

const IconButton = ({
    as,
    children,
    className,
    variant  = Variants.Primary,
    labelIconButton,
    size = IconButtonSizes.Medium,
    IconName,
    state,
    icon,
    onClick,
    ...props
}: IconButtonProps) => {
    const IconButtonTag = as || props.href ? HTMLLink : HTMLButton;
    const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (props.disabled) return;
        onClick?.(event);
      };

    const cn = classNames("btn", `btn_${variant}`, `btn_${size}`, className);

    return (
        <IconButtonTag className={cn} onClick={handleClick} {...props}>
            { labelIconButton || children }
        </IconButtonTag>
    );
}

// @ts-expect-error Missing type on props
const HTMLLink = (props) => <a {...props} />;
// @ts-expect-error Missing type on props
const HTMLButton = (props) => <button {...props} />;

export default IconButton;

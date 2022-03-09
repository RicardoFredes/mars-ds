import type { RadioProps } from "./radio.types";
import type { MouseEvent } from "react";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographics/Text";

const Radio = ({ label, className, disabled, ...props }: RadioProps) => {
  const cn = classNames("radio", className, { "radio--is-disabled": disabled });

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (disabled) event.preventDefault();
  };

  return (
    <div data-testid="radio" className={cn}>
      <label htmlFor={props.id} className="radio__container" onClick={handleClick}>
        <input
          {...props}
          data-testid="radio-input"
          className="radio__input"
          type="radio"
          disabled={disabled}
        />
        <Icon name="radio-button-on" className="radio__icon radio__icon--on" />
        <Icon name="radio-button-off" className="radio__icon radio__icon--off" />
        {label && (
          <Text className="radio__label" as="span" size={TextSizes.Small}>
            {label}
          </Text>
        )}
      </label>
    </div>
  );
};

export default Radio;

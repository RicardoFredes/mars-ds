import type { MouseEvent } from "react";
import type { RadioProps } from "./radio.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographies/Text";
import { ICONS } from "@/configs/icons.config";

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
        <Icon name={ICONS.FORMS.RADIO_CHECKED} className="radio__icon radio__icon--on" />
        <Icon name={ICONS.FORMS.RADIO_UNCHECKED} className="radio__icon radio__icon--off" />
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

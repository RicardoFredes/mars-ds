import Icon from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographics/Text";
import classNames from "classnames";
import { RadioProps } from "./";

const Radio = ({ name, label, id, className, ...props }: RadioProps) => {
  const cn = classNames("radio", className, { "radio--is-disabled": props.disabled });

  return (
    <div className={cn}>
      <label htmlFor={id} className="radio__container">
        <input className="radio__input" type="radio" name={name} id={id} {...props} />
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

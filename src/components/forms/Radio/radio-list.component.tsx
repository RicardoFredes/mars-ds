import Radio from "./";
import classNames from "classnames";
import { RadioListProps } from "./radio.types";

const RadioList = ({ name, options, className, ...props }: RadioListProps) => {
  const cn = classNames("radioList", className);
  return (
    <div className={cn} {...props}>
      {options &&
        options.map(({ label, value }, key) => (
          <Radio key={key} name={name} label={label} value={value} />
        ))}
    </div>
  );
};

export default RadioList;

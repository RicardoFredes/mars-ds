import type { AccordionLabelHeaderProps, AccordionLabelProps } from "./accordion-label.types";

import classNames from "classnames";

import Accordion from "@/components/basics/Accordion";
import Icon from "@/components/basics/Icon";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import Text, { TextSizes } from "@/components/typographies/Text";
import { ICONS } from "@/configs/icons.config";

const AccordionLabel = ({
  className,
  label,
  title,
  colorLabel,
  children,
  ...props
}: AccordionLabelProps) => {
  const cn = classNames("accordion-label", className);
  const headerComponent = () => <HeaderLabel colorLabel={colorLabel} label={label} title={title} />;
  return (
    <Accordion headerComponent={headerComponent} {...props} className={cn}>
      {children}
    </Accordion>
  );
};

const HeaderLabel = ({ title, label, colorLabel }: AccordionLabelHeaderProps) => (
  <div className="accordion__header-container">
    {title && (
      <Heading size={HeadingSizes.XSmall} className="accordion-label__title">
        {title}
      </Heading>
    )}
    <Icon className="accordion__header-container__icon-toggle" name={ICONS.ACTIONS.EXPAND} />
    <Text
      size={TextSizes.Small}
      style={{ color: colorLabel }}
      className="accordion-label__subtitle"
    >
      {label}
    </Text>
  </div>
);
export default AccordionLabel;

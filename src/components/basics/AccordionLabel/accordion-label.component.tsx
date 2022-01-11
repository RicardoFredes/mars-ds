import { AccordionLabelHeaderProps, AccordionLabelProps } from "./accordion-label.types";
import classNames from "classnames";
import Accordion from "@/components/basics/Accordion";
import Text, { TextSizes } from "@/components/typographics/Text";
import Icon from "@/components/basics/Icon";
import Subtitle, { SubtitleSizes } from "@/components/typographics/Subtitle";

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
      <Text size={TextSizes.Small} className="accordion-label__title">
        {title}
      </Text>
    )}
    <Icon className="accordion__header-container__icon-toggle" name="chevron-down" />
    <Subtitle
      size={SubtitleSizes.Small}
      style={{ color: colorLabel }}
      className="accordion-label__subtitle"
    >
      {label}
    </Subtitle>
  </div>
);
export default AccordionLabel;

import Icon from "@/components/basics/Icon";
import type { HeadingProps } from "@/components/typographies/Heading";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";

const AccordionHeaderDefault = ({ title }: { title?: string | HeadingProps }) => {
  return (
    <div className="accordion__header-container">
      {title &&
        (typeof title === "string" ? (
          <Heading level={3} size={HeadingSizes.XSmall} className="accordion-header__title">
            {title}
          </Heading>
        ) : (
          <Heading {...title} />
        ))}
      <Icon className="accordion__header-container__icon-toggle" name="chevron-down" />
    </div>
  );
};

export default AccordionHeaderDefault;

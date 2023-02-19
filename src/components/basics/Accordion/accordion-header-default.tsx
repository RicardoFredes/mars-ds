import Icon from "@/components/basics/Icon";
import type { HeadingProps } from "@/components/typographies/Heading";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import { ICONS } from "@/configs/icons.config";

const AccordionHeaderDefault = ({ title }: { title?: string | HeadingProps }) => {
  return (
    <div className="accordion__header-container">
      {title &&
        (typeof title === "string" ? (
          <Heading level={3} size={HeadingSizes.Small} className="accordion-header__title">
            {title}
          </Heading>
        ) : (
          <Heading {...title} />
        ))}
      <Icon className="accordion__header-container__icon-toggle" name={ICONS.ACTIONS.EXPAND} />
    </div>
  );
};

export default AccordionHeaderDefault;

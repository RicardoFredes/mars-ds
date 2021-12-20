import { Heading, HeadingSizes, Icon } from "@/index";

const AccordionHeaderDefault = ({ title }: { title?: string }) => {
  return (
    <div className="accordion__header-container">
      {title && (
        <Heading size={HeadingSizes.XSmall} className="accordion-header__title">
          {title}
        </Heading>
      )}
      <Icon className="accordion__header-container__icon-toggle" name={"chevron-down"} />
    </div>
  );
};

export default AccordionHeaderDefault;

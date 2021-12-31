import Tokens from "@/tokens";
import classNames from "classnames";
import AccordionHeaderDefault from "../Accordion/accordion-header-default";
import Icon from "../Icon";
import { IconVariants } from "./accordion-status.types";

interface AccordionStatusHeaderProps extends React.HTMLProps<HTMLDivElement> {
  icon: typeof IconVariants[keyof typeof IconVariants];
  title: string;
}

export const iconVariant = {
  complete: {
    name: "checkmark-circle",
    color: Tokens.ColorSuccess500,
  },
  pending: {
    name: "checkmark-circle",
    color: Tokens.ColorNeutral300,
  },
  waiting: {
    name: "clock",
    color: Tokens.ColorWarning500,
  },
  alert: {
    name: "alert-circle",
    color: Tokens.ColorNeutral300,
  },
  inProgress: {
    name: "pix",
    color: Tokens.ColorInfo500,
  },
  live: {
    name: "google",
    color: Tokens.ColorPrimary500,
  },
};
const AccordionStatusHeader = ({
  icon = IconVariants.complete,
  className,
  title,
  ...props
}: AccordionStatusHeaderProps) => {
  const cn = classNames("accordion-status__header", className);

  return (
    <div className={cn} {...props}>
      <Icon name={icon.name} style={{ color: icon.color }} />
      <AccordionHeaderDefault title={title} />
    </div>
  );
};

export default AccordionStatusHeader;

import type { EmbedProps } from "./embed.types";

import classNames from "classnames";

import Text from "@/components/typographies/Text";

import Button, { ButtonSizes } from "../Button";
import { EmbedSizes } from "./embed.types";

const Embed = ({
  src,
  type = "application/pdf",
  variantButton = "primary",
  size = EmbedSizes.Default,
  target = "_blank",
  textButton = "Baixar arquivo",
  messageDownload = "Se você não consegue visualizar este documento, clique no botão abaixo e faça download!",
  className,
  ...props
}: EmbedProps) => {
  const cn = classNames("embed", `embed--${size}`, className);

  if (!src) return null;
  return (
    <object data-testid="embed" data={src} type={type} className={cn} {...props}>
      <Text data-testid="text">{messageDownload}</Text>
      <Button
        variant={variantButton}
        data-testid="button"
        href={src}
        target={target}
        size={ButtonSizes.Small}
      >
        {textButton}
      </Button>
    </object>
  );
};

export default Embed;

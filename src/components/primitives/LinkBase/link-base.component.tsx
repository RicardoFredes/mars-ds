import { useLink } from "./link-base.hooks";
import type { LinkBaseProps } from "./link-base.types";

const LinkBase = (props: LinkBaseProps) => {
  const LinkComponent = useLink();
  if (LinkComponent) return <LinkComponent {...props} />;

  const { href, ...rest } = props;
  const external = props.target === "_blank";
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;
  return <a target={target} {...rest} href={href} rel={rel} />;
};

export default LinkBase;

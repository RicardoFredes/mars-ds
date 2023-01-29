export interface LinkBaseProps extends React.HTMLProps<HTMLAnchorElement> {}

export type LinkBaseComponent =
  | string
  | React.ComponentClass<LinkBaseProps, any>
  | React.FunctionComponent<LinkBaseProps>;

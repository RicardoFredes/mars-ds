export type LinkerProps = {
  ComponentLink: ComponentLink;
  children: string | React.ReactNode;
};

export type ComponentLink = React.ElementType | string;

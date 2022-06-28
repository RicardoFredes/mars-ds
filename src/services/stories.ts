export const commonStoreComponentProps = {
  className: {
    description: "The same classnames lib",
    control: { type: "text" },
  },
  id: {
    description: "The html id",
    control: { type: "text" },
  },
  style: {
    description: "The same style object used in react",
    control: { type: "object" },
  },
  props: {
    description: "All the props accept in AnchorHTML type",
    control: { type: "object" },
  },
};

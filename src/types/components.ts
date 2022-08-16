export type ComponentLink = React.ElementType | string;
export type ComponentItem = Omit<React.HTMLProps<HTMLDivElement>, "value" | "list" | "size">;
export type ComponentCommon = Pick<React.HTMLProps<HTMLElement>, "id" | "className" | "style">;

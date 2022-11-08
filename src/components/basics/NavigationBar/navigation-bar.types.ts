interface Item {
  iconName: string;
  text?: string;
}

export interface NavigationBarProps extends React.HTMLProps<HTMLDivElement> {
  items: Item[];
  showText?: boolean;
}

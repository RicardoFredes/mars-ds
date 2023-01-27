interface ArrowProps {
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

interface ListProps {
  number?: string;
  active?: boolean;
  disabled?: boolean;
  colors?: Array<string>;
  href?: string;
  onClick?: () => void;
}

interface CalendarProps extends React.HTMLAttributes<HTMLElement> {
  next?: ArrowProps;
  previous?: ArrowProps;
  title?: string;
  subtitle?: string;
  weekList?: Array<string>;
  list: Array<ListProps>;
}

export type { CalendarProps };

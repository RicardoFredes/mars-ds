export interface PaginationProps extends React.HTMLProps<HTMLUListElement> {
  current?: number;
  total?: number;
  siblingCount?: number;
  onSelectPage?: (page: number) => void;
}

export interface PaginationItemProps {
  pageNumber?: string | number;
  onClick?: VoidFunction;
  iconName?: string;
  isCurrent?: boolean;
  isDisabled?: boolean;
}

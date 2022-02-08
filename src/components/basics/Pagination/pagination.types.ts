export interface PaginationProps extends React.HTMLProps<HTMLUListElement> {
  defaultCurrentPage?: number;
  numPages?: number;
  siblingCount?: number;
}

export interface PaginationItemProps {
  pageNumber?: string | number;
  onClick?: VoidFunction;
  iconName?: string;
  isCurrent?: boolean;
  isDisabled?: boolean;
}

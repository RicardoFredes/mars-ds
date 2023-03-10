import type { PaginationProps, PaginationItemProps } from "./pagination.types";

import classNames from "classnames";
import { useState, useMemo, useEffect } from "react";

import Icon from "@/components/basics/Icon";

import { getPaginationRange } from "./pagination.helpers";

const Pagination = ({
  className,
  current = 1,
  total = 5,
  siblingCount = 2,
  onSelectPage,
  ...props
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(current);

  useEffect(() => {
    if (currentPage !== current) setCurrentPage(current);
  }, [current]);

  const paginationRange = useMemo(
    () => getPaginationRange(total, currentPage, siblingCount),
    [currentPage, total, siblingCount]
  );

  if (currentPage === 0 || paginationRange.length < 2) return null;

  const cn = classNames("pagination", className);

  const handleSelectPage = (page: number) => {
    if (currentPage === page) return;
    setCurrentPage(page);
    onSelectPage?.(page);
  };

  const onPageChange = (page: number) => handleSelectPage(page);
  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={cn} {...props}>
      <PaginationItem
        data-testid="pagination-prev-button"
        iconName="chevron-left"
        isDisabled={currentPage === 1}
        onClick={onPrevious}
      />
      {paginationRange.map((pageNumber: number | string, index) => (
        <PaginationItem
          data-testid="pagination-page-number"
          key={index}
          isCurrent={pageNumber === currentPage}
          isDisabled={typeof pageNumber === "string"}
          onClick={() => onPageChange(Number(pageNumber))}
          pageNumber={pageNumber}
        />
      ))}
      <PaginationItem
        data-testid="pagination-next-button"
        iconName="chevron-right"
        isDisabled={currentPage === lastPage}
        onClick={onNext}
      />
    </ul>
  );
};

const PaginationItem = ({
  pageNumber,
  onClick,
  iconName,
  isCurrent,
  isDisabled,
  ...props
}: PaginationItemProps) => {
  const handleClick = () => {
    if (isDisabled) return;
    onClick?.();
  };

  return (
    <li
      className={classNames("pagination__item", {
        "pagination__item--is-current": isCurrent,
        "pagination__item--is-disabled": isDisabled,
        "pagination__item--is-enabled": onClick && !isDisabled,
      })}
      role="button"
      onClick={handleClick}
      {...props}
    >
      {iconName ? <Icon name={iconName} /> : pageNumber}
    </li>
  );
};

export default Pagination;

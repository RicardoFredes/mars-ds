const DOTS = "...";
const FIRST_PAGE_INDEX = 1;

export const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const getPaginationRange = (
  numPages: number,
  currentPage: number,
  siblingCount: number
): Array<number | string> => {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= numPages) return range(1, numPages);

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, numPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < numPages - 2;

  const sideItemCount = 3 + 2 * siblingCount;

  if (!shouldShowLeftDots && shouldShowRightDots) return addRightDots(numPages, sideItemCount);

  if (shouldShowLeftDots && !shouldShowRightDots) return addLeftDots(numPages, sideItemCount);

  return addBothSideDots(numPages, leftSiblingIndex, rightSiblingIndex);
};

function addRightDots(numPages: number, sideItemCount: number) {
  const leftRange = range(1, sideItemCount);
  return [...leftRange, DOTS, numPages];
}

function addLeftDots(numPages: number, sideItemCount: number) {
  const rightRange = range(numPages - sideItemCount + 1, numPages);
  return [FIRST_PAGE_INDEX, DOTS, ...rightRange];
}

function addBothSideDots(numPages: number, leftSiblingIndex: number, rightSiblingIndex: number) {
  const middleRange = range(leftSiblingIndex, rightSiblingIndex);
  return [FIRST_PAGE_INDEX, DOTS, ...middleRange, DOTS, numPages];
}

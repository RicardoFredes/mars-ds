import type { PaginationProps } from "./pagination.types";

import { render } from "@testing-library/react";

import Pagination from "./pagination.component";

const dataTestId = {
  paginationPageNumber: "pagination-page-number",
  paginationPrevButton: "pagination-prev-button",
  paginationNextButton: "pagination-next-button",
};

const classNameLabel = {
  isCurrent: "pagination__item pagination__item--is-current pagination__item--is-enabled",
  isEnabled: "pagination__item pagination__item--is-enabled",
  isDisabled: "pagination__item pagination__item--is-disabled",
};

const makeSut = (props?: PaginationProps) => render(<Pagination {...props} />);

describe("<Pagination>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render a default numbers of pages if not provided a numPages", () => {
    const wrapper = makeSut();
    const pageNumbers = wrapper.getAllByTestId(dataTestId.paginationPageNumber);
    expect(pageNumbers).toHaveLength(5);
  });

  it("should render the same amount of the numPages that are provided by numPages prop ", () => {
    const numPages = 3;
    const wrapper = makeSut({ numPages });
    const pages = wrapper.getAllByTestId(dataTestId.paginationPageNumber);
    expect(pages).toHaveLength(numPages);
  });

  it("should current page is equal to defaultCurrentPage prop", () => {
    const defaultCurrentPage = 5;
    const wrapper = makeSut({ defaultCurrentPage });
    const pages = wrapper.getAllByTestId(dataTestId.paginationPageNumber);

    expect(pages[0]?.className).toBe(classNameLabel.isEnabled);
    expect(pages[1]?.className).toBe(classNameLabel.isEnabled);
    expect(pages[2]?.className).toBe(classNameLabel.isEnabled);
    expect(pages[3]?.className).toBe(classNameLabel.isEnabled);
    expect(pages[4]?.className).toBe(classNameLabel.isCurrent);
  });

  it("should render a disabled previous button if the first element is selected", () => {
    const wrapper = makeSut();
    const pagePrevIcon = wrapper.getByTestId(dataTestId.paginationPrevButton);
    expect(pagePrevIcon.className).toBe(classNameLabel.isDisabled);
  });

  it("should render a enabled previous button if the first element is not selected", () => {
    const wrapper = makeSut({ defaultCurrentPage: 5 });
    const pagePrevIcon = wrapper.getByTestId(dataTestId.paginationPrevButton);
    expect(pagePrevIcon.className).toBe(classNameLabel.isEnabled);
  });

  it("should render a disabled next button if the last element is selected", () => {
    const wrapper = makeSut({ defaultCurrentPage: 5 });
    const pageNextIcon = wrapper.getByTestId(dataTestId.paginationNextButton);
    expect(pageNextIcon.className).toBe(classNameLabel.isDisabled);
  });

  it("should render a enabled next button if the last element is not selected", () => {
    const wrapper = makeSut();
    const pageNextIcon = wrapper.getByTestId(dataTestId.paginationNextButton);
    expect(pageNextIcon.className).toBe(classNameLabel.isEnabled);
  });
});

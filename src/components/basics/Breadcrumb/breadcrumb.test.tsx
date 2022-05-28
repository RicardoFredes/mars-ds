import type { BreadcrumbProps } from "./breadcrumb.types";

import { fireEvent, render, waitFor } from "@testing-library/react";

import Breadcrumb from ".";
import { mountListMock } from "./breadcrumb.fixture";

const makeSut = (props?: Partial<BreadcrumbProps>) => render(<Breadcrumb {...props} />);

const PROPS = {
  ITEM_TEST_ID: "breadcrumb-item",
  TOGGLE_TEST_ID: "toggle-dropdown-button",
};

describe("<Breadcrumb>", () => {
  describe("when has less than 4 items", () => {
    const labels = ["Label 1", "Label 2", "Label 3"];
    const list = mountListMock(labels);

    it("should match the snapshot", () => {
      const wrapper = makeSut({ list });
      expect(wrapper).toMatchSnapshot();
    });

    it.each(labels)("should render a <BreadcrumbListItem> with label %s", (label) => {
      const wrapper = makeSut({ list });
      wrapper.getByText(label);
    });
  });

  describe("when has more than 3 items", () => {
    const labels = ["Label 1", "Label 2", "Label 3", "Label 4"];
    const list = mountListMock(labels);

    describe("When modal is closed", () => {
      it("should match the snapshot", () => {
        const wrapper = makeSut({ list });
        expect(wrapper).toMatchSnapshot();
      });

      it("should render a first <BreadcrumbListItem> with label 1", () => {
        const wrapper = makeSut({ list });
        wrapper.getByText(labels[0] as string);
      });

      it("should render a last <BreadcrumbListItem> with label 4", () => {
        const wrapper = makeSut({ list });
        wrapper.getByText(labels[labels.length - 1] as string);
      });

      it("should render a <ToggleDropdown>", () => {
        const wrapper = makeSut({ list });
        wrapper.getByTestId(PROPS.TOGGLE_TEST_ID);
      });

      it("should only render the first and the last <BreadcrumbListItem>", async () => {
        const wrapper = makeSut({ list });
        expect(wrapper.getAllByTestId(PROPS.ITEM_TEST_ID)).toHaveLength(2);

        await waitFor(() => {
          expect(wrapper.queryByText(labels[0] as string)).toBeInTheDocument();
          expect(wrapper.queryByText(labels[1] as string)).not.toBeInTheDocument();
          expect(wrapper.queryByText(labels[2] as string)).not.toBeInTheDocument();
          expect(wrapper.queryByText(labels[3] as string)).toBeInTheDocument();
        });
      });
    });

    describe("When modal is open", () => {
      it("should match the snapshot", () => {
        const wrapper = makeSut({ list });
        fireEvent.click(wrapper.getByTestId(PROPS.TOGGLE_TEST_ID));
        expect(wrapper).toMatchSnapshot();
      });

      it.each(labels)("should render a <BreadcrumbListItem> with label %s", (label) => {
        const wrapper = makeSut({ list });
        fireEvent.click(wrapper.getByTestId(PROPS.TOGGLE_TEST_ID));
        wrapper.getByText(label);
      });
    });
  });
});

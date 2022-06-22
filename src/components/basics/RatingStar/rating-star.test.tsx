import type { RatingStarProps } from "./rating-star.types";

import { fireEvent, render, waitFor } from "@testing-library/react";

import RatingStar from "./rating-star.component";

const dataTestId = { radioStar: "radio-star", labelStar: "label-star" };
const classNameLabel = {
  isActive: "rating-star__icon rating-star__icon--is-active",
  default: "rating-star__icon",
};
const makeSut = (props?: RatingStarProps) => render(<RatingStar {...props} />);
describe("<RatingStar>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it('should render a default numbers of the stars if not provided a "total"', () => {
    const wrapper = makeSut();
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars).toHaveLength(5);
  });

  it('should render the same amount of the stars that are provided by "total" prop', () => {
    const total = 10;
    const wrapper = makeSut({ total });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars).toHaveLength(total);
  });

  it('should checked star is equal to "value" prop', () => {
    const value = 3;
    const wrapper = makeSut({ value });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);

    expect(stars[0]).toHaveProperty("checked", false);
    expect(stars[1]).toHaveProperty("checked", false);
    expect(stars[2]).toHaveProperty("checked");
    expect(stars[3]).toHaveProperty("checked", false);
    expect(stars[4]).toHaveProperty("checked", false);
  });

  it('should stars has the correct "value"', () => {
    const value = 3;
    const wrapper = makeSut({ value });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);

    expect(stars[0]).toHaveProperty("value", "1");
    expect(stars[1]).toHaveProperty("value", "2");
    expect(stars[2]).toHaveProperty("value", "3");
    expect(stars[3]).toHaveProperty("value", "4");
    expect(stars[4]).toHaveProperty("value", "5");
  });
  it('should render the same amount of the stars that are provided by "total" prop ', () => {
    const total = 10;
    const wrapper = makeSut({ total });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars).toHaveLength(total);
  });

  it('should change the rating "value" after clicking on any star', () => {
    const wrapper = makeSut();
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    const thirdStar = stars[2];
    if (!thirdStar) throw new Error("Element not found");
    expect(thirdStar).toHaveProperty("checked", false);
    fireEvent.click(thirdStar);
    expect(thirdStar).toHaveProperty("checked");
  });

  it('should call onSelect method on change "value"', () => {
    const onSelectSpy = jest.fn();
    const wrapper = makeSut({ onSelect: onSelectSpy });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    const thirdStar = stars[2];
    expect(onSelectSpy).not.toHaveBeenCalled();
    if (!thirdStar) throw new Error("Element not found");
    fireEvent.click(thirdStar);
    expect(onSelectSpy).toHaveBeenCalledWith(3);
    expect(onSelectSpy).toHaveBeenCalledTimes(1);
  });

  it('should change the class of stars if its given a "value"', () => {
    const value = 3;
    const wrapper = makeSut({ value });
    const stars = wrapper.getAllByTestId(dataTestId.labelStar);
    expect(stars[0]?.className).toBe(classNameLabel.isActive);
    expect(stars[1]?.className).toBe(classNameLabel.isActive);
    expect(stars[2]?.className).toBe(classNameLabel.isActive);
    expect(stars[3]?.className).not.toBe(classNameLabel.isActive);
    expect(stars[4]?.className).not.toBe(classNameLabel.isActive);
  });

  it("should change the class of stars when is clicked or active ", () => {
    const value = 3;
    const wrapper = makeSut({ value });
    const stars = wrapper.getAllByTestId(dataTestId.labelStar);
    expect(stars[0]?.className).toBe(classNameLabel.isActive);
    expect(stars[1]?.className).toBe(classNameLabel.isActive);
    expect(stars[2]?.className).toBe(classNameLabel.isActive);
    expect(stars[3]?.className).not.toBe(classNameLabel.isActive);
    expect(stars[4]?.className).not.toBe(classNameLabel.isActive);
    if (!stars[0]) throw new Error("Element not found");
    fireEvent.click(stars[0]);
    expect(stars[0]?.className).toBe(classNameLabel.isActive);
    expect(stars[1]?.className).not.toBe(classNameLabel.isActive);
    expect(stars[2]?.className).not.toBe(classNameLabel.isActive);
    expect(stars[3]?.className).not.toBe(classNameLabel.isActive);
    expect(stars[4]?.className).not.toBe(classNameLabel.isActive);
  });

  it('should render five stars when "total" <= 0', () => {
    const wrapper = makeSut({ total: -1 });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars.length).toBe(5);
  });

  it('should check the highest rate star when "value" is greater than "total"', () => {
    const value = 15;
    const total = 5;
    const wrapper = makeSut({ value, total });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars[0]).toHaveProperty("checked", false);
    expect(stars[1]).toHaveProperty("checked", false);
    expect(stars[2]).toHaveProperty("checked", false);
    expect(stars[3]).toHaveProperty("checked", false);
    expect(stars[4]).toHaveProperty("checked");
  });

  it('shouldn\'t check any star if "value" is less than zero', () => {
    const defaultValue = -15;
    const wrapper = makeSut({ defaultValue });
    const stars = wrapper.getAllByTestId(dataTestId.radioStar);
    expect(stars[0]).toHaveProperty("checked", false);
    expect(stars[1]).toHaveProperty("checked", false);
    expect(stars[2]).toHaveProperty("checked", false);
    expect(stars[3]).toHaveProperty("checked", false);
    expect(stars[4]).toHaveProperty("checked", false);
  });

  it('should show a "label" value', async () => {
    const label = "any_label";
    const wrapper = makeSut({ label });
    wrapper.getByText(label);
    await waitFor(() => {
      const element = wrapper.queryByText("Avaliação:");
      expect(element).not.toBeInTheDocument();
    });
  });
});

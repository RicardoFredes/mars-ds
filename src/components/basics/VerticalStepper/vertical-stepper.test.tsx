import type { VerticalStepperProps, VerticalStepperItemProps } from "./vertical-stepper.types";

import { render } from "@testing-library/react";

import VerticalStepper from "./vertical-stepper.component";

const CLASSES = {
  item: "vertical-stepper__item",
  container: "vertical-stepper__container",
  circle: "vertical-stepper__circle",
  icon: "vertical-stepper__icon",
  content: "vertical-stepper__content",
  title: "vertical-stepper__title",
  subtitle: "vertical-stepper__subtitle",
  children: "vertical-stepper__children",
};

const defaultProps: VerticalStepperProps = {
  items: [
    {
      title: "A soma de forma intuitiva",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
    },
    {
      title: "Somando de tudo",
      subtitle: "10 minutos",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "video",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
  ],
};

const makeItemProps = (
  overrides: Partial<VerticalStepperItemProps> = {}
): VerticalStepperItemProps => ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...defaultProps.items[0]!,
  ...overrides,
});

const makeSut = (props?: VerticalStepperProps) =>
  render(<VerticalStepper {...defaultProps} {...props} />);

describe("<VerticalStepper>", () => {
  it("should match the snapshot", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain a link wrapping each item", () => {
    const wrapper = makeSut();
    const links = wrapper.getAllByRole("link") as HTMLAnchorElement[];

    expect(links).toHaveLength(defaultProps.items.length);
    expect(
      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link.attributes.getNamedItem("href")?.value).toBe(
          defaultProps.items?.[0]?.link.href
        );

        expect(link).toHaveAttribute("target");
        expect(link.attributes.getNamedItem("target")?.value).toBe(
          defaultProps.items?.[0]?.link.target
        );
      })
    );
  });

  describe("dots", () => {
    it("should contain a dot for each item", () => {
      const wrapper = makeSut();
      const dots = wrapper.getAllByTestId(CLASSES.circle);

      expect(dots.length).toBe(defaultProps.items.length);
    });

    it("should change color based on the item's circleColor prop", () => {
      const props: VerticalStepperProps = {
        items: [makeItemProps({ circleColor: "var(--color-text-disabled)" })],
      };

      const wrapper = makeSut(props);
      const dot = wrapper.getByTestId(CLASSES.circle);

      expect(dot).toHaveStyle(`background-color: ${props.items?.[0]?.circleColor}`);
    });
  });

  describe("when the icon prop is present", () => {
    it("should contain an icon", () => {
      const props: VerticalStepperProps = {
        items: [makeItemProps({ icon: "video" })],
      };
      const wrapper = makeSut(props);
      const icons = wrapper.getAllByTestId(CLASSES.icon);

      expect(icons.length).toBe(1);
    });

    it("should change color based on the item's iconColor prop", () => {
      const props: VerticalStepperProps = {
        items: [makeItemProps({ icon: "video", iconColor: "var(--color-text-disabled)" })],
      };

      const wrapper = makeSut(props);
      const icon = wrapper.getByTestId(CLASSES.icon);

      expect(icon).toHaveStyle(`background-color: ${props.items?.[0]?.circleColor}`);
    });
  });

  it("should contain a title", () => {
    const wrapper = makeSut();
    const titles = wrapper.getAllByTestId(CLASSES.title);

    expect(titles.length).toBe(defaultProps.items.length);
  });

  it("should contain a subtitle", () => {
    const props: VerticalStepperProps = {
      items: [makeItemProps({ subtitle: "8 minutos" })],
    };
    const wrapper = makeSut(props);
    const subtitles = wrapper.getAllByTestId(CLASSES.subtitle);

    expect(subtitles.length).toBe(1);
  });

  it("should contain children", () => {
    const props: VerticalStepperProps = {
      items: [makeItemProps({ children: <p>children</p> })],
    };
    const wrapper = makeSut(props);
    const children = wrapper.getAllByTestId(CLASSES.children);

    expect(children.length).toBe(1);
  });
});

import type { ItemsListProps, ItemsListElementProps } from "./items-list.types";

import { render } from "@testing-library/react";

import ItemsList from "./items-list.component";

const CLASSES = {
  item: "items-list__item",
  container: "items-list__container",
  circle: "items-list__circle",
  icon: "items-list__icon",
  content: "items-list__content",
  title: "items-list__title",
  subtitle: "items-list__subtitle",
  children: "items-list__children",
};

const defaultProps: ItemsListProps = {
  list: [
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

const makeItemProps = (overrides: Partial<ItemsListElementProps> = {}): ItemsListElementProps => ({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...defaultProps.list[0]!,
  ...overrides,
});

const makeSut = (props?: ItemsListProps) => render(<ItemsList {...defaultProps} {...props} />);

describe("<ItemsList>", () => {
  it("should match the snapshot", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain a link wrapping each item", () => {
    const wrapper = makeSut();
    const links = wrapper.getAllByRole("link") as HTMLAnchorElement[];

    expect(links).toHaveLength(defaultProps.list.length);
    expect(
      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link.attributes.getNamedItem("href")?.value).toBe(
          defaultProps.list?.[0]?.link?.href
        );

        expect(link).toHaveAttribute("target");
        expect(link.attributes.getNamedItem("target")?.value).toBe(
          defaultProps.list?.[0]?.link?.target
        );
      })
    );
  });

  describe("dots", () => {
    it("should contain a dot for each item", () => {
      const wrapper = makeSut();
      const dots = wrapper.getAllByTestId(CLASSES.circle);

      expect(dots.length).toBe(defaultProps.list.length);
    });

    it("should change color based on the item's circleColor prop", () => {
      const props: ItemsListProps = {
        list: [makeItemProps({ circleColor: "var(--color-text-disabled)" })],
      };

      const wrapper = makeSut(props);
      const dot = wrapper.getByTestId(CLASSES.circle);

      expect(dot).toHaveStyle(`background-color: ${props.list?.[0]?.circleColor}`);
    });
  });

  describe("when the icon prop is present", () => {
    it("should contain an icon", () => {
      const props: ItemsListProps = {
        list: [makeItemProps({ icon: "video" })],
      };
      const wrapper = makeSut(props);
      const icons = wrapper.getAllByTestId(CLASSES.icon);

      expect(icons.length).toBe(1);
    });

    it("should change color based on the item's iconColor prop", () => {
      const props: ItemsListProps = {
        list: [makeItemProps({ icon: "video", iconColor: "var(--color-text-disabled)" })],
      };

      const wrapper = makeSut(props);
      const icon = wrapper.getByTestId(CLASSES.icon);

      expect(icon).toHaveStyle(`background-color: ${props.list?.[0]?.circleColor}`);
    });
  });

  it("should contain a title", () => {
    const wrapper = makeSut();
    const titles = wrapper.getAllByTestId(CLASSES.title);

    expect(titles.length).toBe(defaultProps.list.length);
  });

  it("should contain a subtitle", () => {
    const props: ItemsListProps = {
      list: [makeItemProps({ subtitle: "8 minutos" })],
    };
    const wrapper = makeSut(props);
    const subtitles = wrapper.getAllByTestId(CLASSES.subtitle);

    expect(subtitles.length).toBe(1);
  });

  it("should contain children", () => {
    const props: ItemsListProps = {
      list: [makeItemProps({ children: <p>children</p> })],
    };
    const wrapper = makeSut(props);
    const children = wrapper.getAllByTestId(CLASSES.children);

    expect(children.length).toBe(1);
  });
});

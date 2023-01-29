import type { AppProviderProps } from "./app-provider.types";

import { render } from "@testing-library/react";

import AppProvider from "./app-provider.component";

const makeSut = (props?: AppProviderProps) => render(<AppProvider {...props} />);

describe("<AppProvider>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});

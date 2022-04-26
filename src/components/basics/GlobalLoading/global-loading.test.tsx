import type { GlobalLoadingProps } from "./global-loading.types";

import { render } from "@testing-library/react";

import GlobalLoading from "./global-loading.component";
import { defaultPhrases } from "./global-loading.helpers";

const makeSut = (props?: GlobalLoadingProps) => render(<GlobalLoading {...props} />);

describe("<GlobalLoading>", () => {
  it.each(defaultPhrases)("should render phrase: %p", (phrase) => {
    const { getByText } = makeSut({ phrases: defaultPhrases, isLoading: true });
    getByText(`${phrase}...`);
  });
});

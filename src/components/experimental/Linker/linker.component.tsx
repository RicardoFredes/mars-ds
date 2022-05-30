import type { LinkerProps } from "./linker.types";

import { createContext } from "react";

export const LinkContext = createContext("a" as any);

const Linker = ({ children, ComponentLink }: LinkerProps) => (
  <LinkContext.Provider value={ComponentLink}>{children}</LinkContext.Provider>
);

export default Linker;

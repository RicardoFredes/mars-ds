import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
};

export default config;

import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "demo-stenciljs",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    collectCoverage: true,
    coverageReporters: ["json", "html", "lcov"]
  }
};

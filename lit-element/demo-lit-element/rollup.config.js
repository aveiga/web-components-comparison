// import postcss from "rollup-plugin-postcss";
// import resolve from "rollup-plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";
// import serve from "rollup-plugin-serve";
// import livereload from "rollup-plugin-livereload";
// import copy from "rollup-plugin-copy";
// import AtImport from "postcss-import";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

let plugins = [
  typescript({
    target: "es6"
  }),
  resolve()
];

module.exports = [
  {
    input: "src/demo-lit-element.ts",
    output: {
      file: "dist/demo-lit-element.js",
      format: "esm"
    },
    plugins: plugins
  }
];

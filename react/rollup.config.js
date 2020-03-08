import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
  input: "./src/index.tsx",
  output: {
    file: "./dist/bundle.js",
    sourcemap: true
  },
  format: "esm",
  plugins: [
    resolve({
      browser: true
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    typescript(),
    commonjs({
      include: ["node_modules/**"],
      exclude: ["**/*.stories.js"],
      namedExports: {
        "node_modules/react/index.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
          "useState"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    })
  ]
};

import styles from "rollup-plugin-styles";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import externals from "rollup-plugin-node-externals";
import visualizer from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";
const autoprefixer = require("autoprefixer");

// the entry point for the library
const input = "./src/ReactJsonBuilder.jsx";

const GLOBALS = {
  "react": "React",
  "react-dom": "ReactDOM",
};
var config = [];

var conf = {
  input: input,
  output: {
    // name of your package
    name: "ReactJsonBuilder",
    file: "public/react-json-builder.js",
    format: "cjs",
    globals: GLOBALS,
  },
  // this externelizes react to prevent rollup from compiling it
  external: ["react", /@babel\/runtime/],
  plugins: [
    externals({ deps: true }),
    nodeResolve({
      browser: true,
      resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/],
      extensions: ["*", ".js", ".jsx"],
    }),
    // these are babel comfigurations
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    commonjs(),
    // this adds sourcemaps
    // this adds support for styles
    styles({
      postcss: {
        extract: true,
        plugins: [autoprefixer()],
      },
    }),
    visualizer(),
    //terser(),
  ],
};
config.push(conf);

export default config;

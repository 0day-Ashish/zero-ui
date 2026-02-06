import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  esbuildOptions(options) {
    options.alias = {
      "@/lib": path.resolve(__dirname, "src/lib"),
    };
  },
});

import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
})

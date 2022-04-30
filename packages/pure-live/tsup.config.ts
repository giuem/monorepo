import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm'],
  platform: 'browser',
  target: 'es6',
});
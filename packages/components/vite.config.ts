import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import pkg from './package.json';

const external = [
  "react", "react-dom",
  ...Object.keys(pkg.dependencies || {}),
  /@craftjs\/core(\/.+)?/, /@craftjs\/utils(\/.+)?/,
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json'
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ComponentLibrary',
      formats: ['es'],
      fileName: "[name]",
    },
    rollupOptions: {
      external,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
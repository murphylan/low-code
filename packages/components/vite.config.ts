import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

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
      name: 'MyComponentLibrary',
      formats: ['es'],
      fileName: "[name]",
    },
    rollupOptions: {
      external: [
        "react", "react-dom",
        /@craftjs\/core(\/.+)?/, /@craftjs\/utils(\/.+)?/,
      ],
      input: {
        "index": "src/index.tsx",
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, type UserConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@layouts': path.resolve(import.meta.dirname, './src/layouts'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
    },
  },
  test: {
    css: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          recharts: 'Recharts',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
} as UserConfig);

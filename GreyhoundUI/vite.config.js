import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteDts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  publicDir: 'public',
  plugins: [
    react(),
    ViteDts({
      insertTypesEntry: true, // Inserta el archivo de tipos
      skipDiagnostics: false, // Habilita los diagnósticos de tipos
      apply: 'build', // Aplicar solo en el build, no en desarrollo
    }),
  ],
  build: {
    lib: {
      entry: './src/main.jsx', // Ruta del punto de entrada de la librería
      name: 'GreyhoundUI', // Nombre global para importaciones en UMD
      fileName: (format) => `greyhound-ui.${format}.js`,
      formats: ["es", "umd"],
    },
    outDir: 'dist', // Directorio de salida
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  base: "/little-lemon-react",
  plugins: [react(), json(), commonjs()],
});
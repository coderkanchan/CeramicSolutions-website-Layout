import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'CeramicSolutions-Website-Layout';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`
})

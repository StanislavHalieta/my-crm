import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@': path.resolve(__dirname, './src'),
    }
  }
})

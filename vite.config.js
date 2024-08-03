import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

export default defineConfig(({ command, mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      ...Object.keys(env).reduce((acc, key) => {
        acc[`__${key}__`] = JSON.stringify(env[key]);
        return acc;
      }, {}),
    },
    css: {
      modules: {
        localConvention: "camelCase",
        generateScopedName: process.env.NODE_ENV === 'prod' ? "[local]_[hash:base64:2]" : "[local]"
      }
    },
    resolve: {
      alias: {
        '@styles' : path.resolve(__dirname, './src/assets/styles'),
        '@images' : path.resolve(__dirname, './src/assets/images')
      }
    }
  }
})
import { defineConfig } from 'eslint/config-flat'
import astro from 'eslint-plugin-astro'

export default defineConfig([
  ...astro.configs['recommended-with-typescript'],
  {
    ignores: ['dist', 'node_modules', '.astro'],
  },
])
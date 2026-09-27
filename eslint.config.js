import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'dist-ssr', 'reports', 'test-results']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: { react },
    rules: {
      // Marca como usadas las variables que solo aparecen en JSX
      // (p. ej. `motion` en <motion.div>).
      ...react.configs.flat.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    settings: { react: { version: 'detect' } },
  },
])

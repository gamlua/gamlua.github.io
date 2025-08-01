// eslint.config.js
import js from '@eslint/js'
import babelParser from '@babel/eslint-parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        wp: true,
        $: true,
        jQuery: true,
        wpApiSettings: true,
        window: true,
        document: true,
        Swiper: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      react: {
        pragma: 'wp',
        version: 'latest',
      },
    },
    rules: {
      'no-console': 'off',
      'no-multi-spaces': 'error',
      'no-debugger': 'error',
      'no-unreachable': 'error',
      'no-multiple-empty-lines': 'error',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
]

// eslint.config.js
const typescriptParser = require('@typescript-eslint/parser');
const airbnb = require('eslint-config-airbnb-typescript/base');
const importPlugin = require('eslint-plugin-import');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: [
          './tsconfig.json',
          './packages/next-hr-fe/.storybook/tsconfig.json',
        ],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: importPlugin,
      jsxA11y: jsxA11y,
      react: react,
      reactHooks: reactHooks,
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...airbnb.rules,
      'prettier/prettier': ['error', prettierConfig],
      'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
      'import/prefer-default-export': 'off',
    },
  },
];

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: 'next' },
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      { allowForLoopAfterthoughts: true },
    ],
    'eslint-disable-next-line': 'no-plusplus',
    'eslint radix': ['error', 'as-needed'],
    'eslint prefer-destructuring': [
      'error',
      { AssignmentExpression: { array: true } },
    ]
  },
};

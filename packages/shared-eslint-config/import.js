module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      settings: {
        'import/resolver': {
          [require.resolve('./lib/eslint-plugin-import-resolver.js')]: {},
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          // optionally, if TypeScript project:
          // https://github.com/alexgorbatchev/eslint-import-resolver-typescript
          // typescript: {
          // 	alwaysTryTypes: false,
          // 	project: ['./PATH/TO/tsconfig.json'],
          // },
          [require.resolve('./lib/eslint-plugin-import-resolver.js')]: {},
        },
      },
    },
  ],
};

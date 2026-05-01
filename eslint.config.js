import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'packages/load/tests/loaders/schema',
      'website',
      'scripts',
      'packages/loaders/code-file/tests/test-files',
      'packages/loaders/git/tests/test-files',
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.typescript,
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-empty': 'off',
      'no-console': 'off',
      'no-prototype-builtins': 'off',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'off',
      'no-undef': 'off',
      'no-dupe-class-members': 'off',
      'dot-notation': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'default-param-last': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['**/*.test.ts', '**/*.spec.ts'] },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'graphql',
              importNames: ['ExecutionResult', 'ExecutionArgs', 'execute', 'subscribe'],
              message:
                'Please use `execute` and `subscribe` from `@graphql-tools/executor` instead.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/{test,tests,testing}/**/*.{ts,js}', '*.{spec,test}.{ts,js}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    ignores: ['**/{test,tests,testing}/**/*.{ts,js}', '*.{spec,test}.{ts,js}'],
    rules: {
      'import/extensions': ['error', 'ignorePackages'],
    },
  },
];

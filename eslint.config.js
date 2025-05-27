import globals from 'globals'
import pluginJs from '@eslint/js'

import stylistic from '@stylistic/eslint-plugin'
// import { Linter } from 'eslint'

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,

  {
    files: ['**/*.{js}'],
  },
  {
    ignores: ['dist/', '__fixtures__/', '__tests__'],
  },
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
    },
  },
] // satisfies Linter.Config[]

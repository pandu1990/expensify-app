module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:jest/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'babel',
    'jest'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    semi: ['error', 'always'],
    'react/prop-types': 0
  }
};

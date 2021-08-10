module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb/base',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@pages', './src/pages'],
          ['@styles', './src/styles'],
          ['@components', './src/components'],
          ['@services', './src/services'],
          ['@constants', './src/constants']
        ]
      }
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        trailingComma: 'none',
        semi: false
      }
    ],
    'react/prop-types': 0,
    'arrow-body-style': 0
  }
}

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  rules: {
    "no-console": 'off',
    "import/prefer-default-export": 'off',
    "import/extensions": ['off']
  }
}
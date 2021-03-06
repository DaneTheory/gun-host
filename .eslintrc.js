module.exports = {
  'extends': 'google',
  'parser': 'babel-eslint',
  'rules': {
    'env': {
      'browser': false,
      'es6': true,
    },
    'parserOptions': {
      'sourceType': 'module',
    },
    'extends': [
      'eslint:recommended',
      'google',
    ],
    'keyword-spacing': ['error'],
    'max-len': ['error', {'code': 140}],
    'no-trailing-spaces': [
      2,
      {'skipBlankLines': true},
    ],
    'no-console': 0,
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};

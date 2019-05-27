module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'max-len': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
  },
};

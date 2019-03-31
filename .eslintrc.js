module.exports = {
  extends: 'airbnb',
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
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
};

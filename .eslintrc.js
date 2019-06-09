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
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-max-props-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-bracket-location': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
  },
  overrides: [
    {
      files: [
        '.*.js',
        '*.config.js',
        '*.spec.js',
        'webpack/*',
        'jest/*',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
};

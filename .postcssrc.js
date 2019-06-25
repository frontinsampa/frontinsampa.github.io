module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        { discardComments: { removeAll: true }},
      ],
    },
  },
};

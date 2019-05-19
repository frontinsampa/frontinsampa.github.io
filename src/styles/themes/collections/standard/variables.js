const THEME_TYPE = 'dark';

/**
 * Colors.
 */
const COLORS_BRAND = {
  live: '#FFFFFF',
  tar: '#000000',
  energy: '#FF685C',
  sunrise: '#DA83F6',
  sunset: '#FBC54C',
  nature: '#7BE473',
  ocean: '#58A9F3',
};

const palette = {
  ...COLORS_BRAND,
  type: THEME_TYPE,
  background: {
    default: COLORS_BRAND.tar,
  },
  text: {
    primary: COLORS_BRAND.live,
  },
};

/**
 * Typography.
 */
const typography = {
  useNextVariants: true,
  fontFamily: [
    'Roboto Mono',
    'monospace',
  ].join(', '),
};

/**
 * Sizes.
 */
const sizes = {
  container: 1280,
};

export default {
  palette,
  sizes,
  typography,
};

import resetCss from 'reset-jss';
import normalizeCss from 'normalize-jss';

const styles = ({ palette }) => ({
  ...resetCss,
  ...normalizeCss,
  base: {
    backgroundColor: palette.tar,
    color: palette.live,
  },
});

export default styles;

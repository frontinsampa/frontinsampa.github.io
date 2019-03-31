import resetCss from 'reset-jss';

const styles = ({ palette }) => ({
  ...resetCss,
  base: {
    backgroundColor: palette.dark,
  },
});

export default styles;

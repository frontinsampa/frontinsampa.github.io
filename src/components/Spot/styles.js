export default ({ palette }) => ({
  spot: {
    borderColor: palette.background.default,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',

    '& > img': {
      height: 'inherit',
      left: '50%',
      position: 'relative',
      transform: 'translateX(-50%)',
      width: 'inherit',
    },
  },
});

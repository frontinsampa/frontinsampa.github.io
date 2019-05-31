export default ({ palette }) => ({
  spot: {
    borderColor: palette.background.default,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'block',
    height: 314,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',

    '& > img': {
      height: 'auto',
      left: '50%',
      position: 'relative',
      transform: 'translateX(-50%)',
      width: 'inherit',
      minHeight: '100%',
    },
  },
});

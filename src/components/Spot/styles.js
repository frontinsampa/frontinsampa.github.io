export default ({ palette }) => ({
  spot: {
    borderColor: palette.background.default,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
    background: '#1A1A1A',
    /**
     * @todo Improve for all sizes.
     */
    height: ({ height }) => height || 314,
    width: ({ width }) => width || '100%',

    '& > img': {
      left: '50%',
      position: 'relative',
      transform: 'translateX(-50%)',
      /**
       * @todo Improve for all sizes.
       */
      width: 'inherit',
      height: 'auto',
      minHeight: '100%',
    },
  },
});

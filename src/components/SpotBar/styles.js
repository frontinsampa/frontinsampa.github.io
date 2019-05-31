import { fade } from '@material-ui/core/styles/colorManipulator';

export default ({ palette }) => ({
  spotBar: {
    cursor: 'pointer',
    height: 'inherit',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 'inherit',
    zIndex: 2,

    '&.actived': {
      cursor: 'default',

      '& > $spotBarContent': {
        transform: 'translateY(0)',
      },
    },
  },
  spotBarContent: {
    alignItems: 'flex-end',
    backgroundColor: fade(palette.tar, 0.8),
    display: 'flex',
    height: 'inherit',
    left: 0,
    position: 'absolute',
    top: 0,
    transform: 'translateY(100%)',
    transition: 'transform .2s',
    width: 'inherit',
  },
});

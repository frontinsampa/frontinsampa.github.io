export default ({ palette, spacing }) => {
  const commonsDimensions = {
    height: 'inherit',
    width: 'inherit',
  };

  const commonsDecoration = {
    ...commonsDimensions,
    content: '""',
    border: '1px solid',
    borderPosition: 'inner',
    position: 'absolute',
    borderColor: ({ custom }) => palette[custom.color],
  };

  return {
    buttonSpecial: {
      display: 'inline-flex',
      position: 'relative',
      marginBottom: spacing(2),
      width: ({ width }) => width || 100,
      height: ({ height }) => height || 50,
      color: ({ custom }) => palette[custom.color],
      backgroundColor: ({ custom }) => palette[custom.background],
      '&::before': {
        ...commonsDecoration,
        top: 0,
        zIndex: 3,
      },
      '&::after': {
        ...commonsDecoration,
        top: 7,
        left: 7,
      },
    },
    buttonSpecialChildren: {
      ...commonsDimensions,
      display: 'inherit',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'inherit',
      zIndex: 2,
      backgroundColor: ({ custom }) => palette[custom.background],
    },
  };
};

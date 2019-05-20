export default ({ palette }) => ({
  typography: {
    color: ({ customColor }) => palette[customColor] || palette.text.primary,
  },
});

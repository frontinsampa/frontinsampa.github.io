export default ({ palette, spacing }) => ({
  section: {
    minHeight: '100vh',
  },
  sectionTitle: {
    marginBottom: spacing(5),
    color: ({ titleCustomColor }) => palette[titleCustomColor] || palette.text.primary,
  },
});

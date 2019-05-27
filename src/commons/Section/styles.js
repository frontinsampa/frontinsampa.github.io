export default ({ palette, spacing }) => ({
  section: {
    padding: ({ collapsed }) => collapsed && 0,
  },
  sectionContainer: {
    minHeight: '100vh',
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
  },
  sectionTitle: {
    color: ({ titleCustomColor }) => palette[titleCustomColor] || palette.text.primary,
    marginBottom: spacing(5),
  },
});

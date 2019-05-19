export default ({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.tar,
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
  },
  headerMenu: {
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
    textTransform: 'lowercase',
  },
});

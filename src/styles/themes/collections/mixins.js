export const body = (props) => ({
  '@global': {
    body: props,
  },
});

export default {
  mixins: {
    body,
  },
};

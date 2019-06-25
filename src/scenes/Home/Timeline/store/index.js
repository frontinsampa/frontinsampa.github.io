export const SET_TIMELINE = 'SET_TIMELINE';

const initialState = {
  page: {
    title: null,
    content: null,
    body: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMELINE:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

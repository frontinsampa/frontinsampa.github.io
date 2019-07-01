export const SET_PARTNERS = 'SET_PARTNERS';
export const SET_PARTNERS_AVAILABLE = 'SET_PARTNERS_AVAILABLE';

const initialState = {
  page: {
    title: [],
    body: [],
  },
  available: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTNERS:
      return {
        ...state,
        ...action.data,
      };

    case SET_PARTNERS_AVAILABLE:
      return {
        ...state,
        available: false,
      };

    default:
      return state;
  }
};

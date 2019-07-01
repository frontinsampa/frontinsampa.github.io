export const SET_SPONSORS = 'SET_SPONSORS';
export const SET_SPONSORS_AVAILABLE = 'SET_SPONSORS_AVAILABLE';

const initialState = {
  page: {
    title: [],
    body: [],
  },
  available: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPONSORS:
      return {
        ...state,
        ...action.data,
      };

    case SET_SPONSORS_AVAILABLE:
      return {
        ...state,
        available: false,
      };


    default:
      return state;
  }
};

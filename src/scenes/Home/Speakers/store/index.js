export const SET_SPEAKER = 'SET_SPEAKER';
export const GET_SPEAKERS_CONTENT = 'GET_SPEAKERS_CONTENT';

const initialState = {
  content: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPEAKER:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

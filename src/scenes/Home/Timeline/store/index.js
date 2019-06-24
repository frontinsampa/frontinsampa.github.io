import deepmerge from 'deepmerge';

export const SET_TIMELINE = 'SET_TIMELINE';
export const SET_TIMELINE_SPOT = 'SET_TIMELINE_SPOT';

const initialState = {
  content: [],
  talks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIMELINE:
      return {
        ...state,
        ...action.data,
      };

    case SET_TIMELINE_SPOT:
      return {
        ...state,
        content: deepmerge(state.content, [{ body: action.data }]),
      };

    default:
      return state;
  }
};

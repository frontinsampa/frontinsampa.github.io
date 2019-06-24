/* eslint-disable */
import deepmerge from 'deepmerge';

import { SET_TIMELINE_SPOT } from '.';

export default (...timelineSpot) => async (dispatch, getState) => {
  let { content } = getState().timeline;

  // content = content.map((arr) => {
  //   const { body, ...bodyProps } = arr;

  //   return {
  //     ...bodyProps,
  //     body: deepmerge(...),
  //   };
  // });

  // console.log('HUSAUHASHU', deepmerge(...content[0].body, ...timelineSpot));

  dispatch({
    type: SET_TIMELINE_SPOT,
    data: timelineSpot,
  });
};

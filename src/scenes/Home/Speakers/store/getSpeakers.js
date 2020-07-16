import { getSpeaker } from '../../../../services/content';

import { SET_SPEAKER } from '.';

export default () => async (dispatch) => {
  const year = new Date().getFullYear().toString();
  const response = await getSpeaker({ year });

  const content = response.map(({ data }) => ({ ...data }));

  dispatch({
    type: SET_SPEAKER,
    data: {
      content,
    },
  });
};

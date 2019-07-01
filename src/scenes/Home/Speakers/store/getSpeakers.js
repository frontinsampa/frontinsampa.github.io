import { getDocument } from '../../../../services/content';

import { SET_SPEAKER } from '.';

export default () => async (dispatch) => {
  const response = await getDocument('speaker');

  const content = response.map(({ data }) => ({ ...data }));

  dispatch({
    type: SET_SPEAKER,
    data: {
      content,
    },
  });
};

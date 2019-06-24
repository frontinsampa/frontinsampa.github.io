import { getDocument } from '../../../../services/content';

import { SET_TIMELINE } from '.';

export default () => async (dispatch) => {
  const response = await getDocument('timeline');
  const content = response.map(({ data }) => ({ ...data }));

  dispatch({
    type: SET_TIMELINE,
    data: {
      content,
    },
  });
};

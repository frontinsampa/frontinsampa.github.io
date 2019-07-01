import { getDocumentByUID } from '../../../../services/content';

import { SET_PARTNERS, SET_PARTNERS_AVAILABLE } from '.';

export default () => async (dispatch) => {
  const response = await getDocumentByUID('page', 'apoiadores');
  const [page] = response.map(({ data }) => ({ ...data }));

  if (page) {
    dispatch({
      type: SET_PARTNERS,
      data: {
        page,
      },
    });

    return;
  }

  dispatch({
    type: SET_PARTNERS_AVAILABLE,
  });
};

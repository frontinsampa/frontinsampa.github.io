import { getDocumentByUID } from '../../../../services/content';

import { SET_SPONSORS, SET_SPONSORS_AVAILABLE } from '.';


export default () => async (dispatch) => {
  const response = await getDocumentByUID('page', 'patrocinadores');
  const [page] = response.map(({ data }) => ({ ...data }));

  if (page) {
    dispatch({
      type: SET_SPONSORS,
      data: {
        page,
      },
    });

    return;
  }

  dispatch({
    type: SET_SPONSORS_AVAILABLE,
  });
};

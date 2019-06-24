import { getDocument } from '../../../../services/content';

import { SET_SPEAKER } from '.';
import setTimelineSpot from '../../Timeline/store/getTimelineSpot';

export default () => async (dispatch) => {
  const timelineSpots = [];

  const response = await getDocument('speaker');
  const content = response.map(({ data }) => {
    const { body, ...restData } = data;

    timelineSpots.push(
      /**
       * @todo Get items with filter by key.
       */
      ...body.filter(({ slice_type }) => slice_type === 'timeline'),
    );

    return { ...restData };
  });

  dispatch({
    type: SET_SPEAKER,
    data: {
      content,
    },
  });

  dispatch(setTimelineSpot(...timelineSpots));
};

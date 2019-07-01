import { Predicates } from 'prismic-javascript';

import connect from './connect';

/**
 * @private
 * @param {...any} predicates
 * @returns {Promise}
 */
const query = async (criterias) => {
  try {
    const api = await connect();
    const { results } = await api.query(
      criterias({ Predicates }),
    );

    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default query;

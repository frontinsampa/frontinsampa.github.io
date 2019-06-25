import Prismic from 'prismic-javascript';

import connect from './connect';

/**
 * @param {string} type
 * @param {array} [filter]
 * @return {Promise}
 */
const getDocument = async (type = 'page', filter = []) => {
  try {
    const api = await connect();
    const { results } = await api.query([
      /**
       * @todo Improve filtering with Predicates from Prismic.
       */
      Prismic.Predicates.at('document.type', type),
      ...filter.map((prop) => {
        const [key] = Object.keys(prop);
        const value = prop[key];

        return Prismic.Predicates.at(`document.${key}`, value);
      }),
    ]);

    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default getDocument;

import query from './query';

/**
 * @param {string} type
 * @return {Promise}
 */
const getDocument = async (type) => query(({ Predicates }) => [
  Predicates.at('document.type', type),
]);

export default getDocument;

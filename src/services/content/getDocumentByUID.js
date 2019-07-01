import query from './query';

/**
 * @param {string} type
 * @param {string} uid
 * @return {Promise}
 */
const getDocumentByUID = (type, uid) => query(({ Predicates }) => [
  Predicates.at(`my.${type}.uid`, uid),
]);

export default getDocumentByUID;

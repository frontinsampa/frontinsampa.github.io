import query from './query';

/**
 * @param {string} type
 * @return {Promise}
 */
const getSpeaker = async ({ year }) => query(({ Predicates }) => [
  Predicates.at('document.type', 'speaker'),
  Predicates.at('document.tags', [year]),
]);

export default getSpeaker;

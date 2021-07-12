import query from './query';

/**
 * @param {string} type
 * @return {Promise}
 */
const getSponsorshipByYear = async (year = new Date().getFullYear()) => query(({ Predicates }) => [
  Predicates.at('document.type', 'sponsorship'),
  Predicates.at('document.tags', [year.toString()]),
]);

const getSponsorById = async (id) => (
  query(({ Predicates }) => [
    Predicates.at('document.id', id),
  ])
);

const getSponsorByIds = async (id) => (
  query(({ Predicates }) => [
    Predicates.in('document.id', id),
  ])
);

export {
  getSponsorshipByYear,
  getSponsorById,
  getSponsorByIds,
};

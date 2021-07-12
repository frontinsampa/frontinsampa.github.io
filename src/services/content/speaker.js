import query from './query';

const getSpeakersByYear = async (year = new Date().getFullYear()) => (
  query(({ Predicates }) => [
    Predicates.at('document.type', 'speaker'),
    Predicates.at('document.tags', [year.toString()]),
  ])
);

const getSpeakerById = async id => (
  query(({ Predicates }) => [
    Predicates.at('document.id', id),
  ])
);

const getSpeakersByIds = async id => (
  query(({ Predicates }) => [
    Predicates.in('document.id', id),
  ])
);

export {
  getSpeakersByYear,
  getSpeakerById,
  getSpeakersByIds,
};

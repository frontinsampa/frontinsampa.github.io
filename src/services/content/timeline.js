import query from './query';

const getTimelineByYear = async (year = new Date().getFullYear()) => (
  query(({ Predicates }) => [
    Predicates.at('document.type', 'timeline'),
    Predicates.at('document.tags', [year.toString()]),
  ])
);

export { getTimelineByYear };

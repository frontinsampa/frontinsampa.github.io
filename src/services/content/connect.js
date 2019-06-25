import Prismic from 'prismic-javascript';

export default () => Prismic.api(PRISMIC_API, { accessToken: PRISMIC_TOKEN });

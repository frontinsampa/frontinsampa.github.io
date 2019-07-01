import Prismic from 'prismic-javascript';

const connect = async () => Prismic.api(PRISMIC_API, { accessToken: PRISMIC_TOKEN });

export default connect;

import withLayout from 'components/layout/Layout';
import NotFound from 'components/pages/NotFound.jsx';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const NotFoundPage = () => {
  return <NotFound />;
};

export default withLayout(NotFoundPage);

export const getStaticProps = async ({ locale }) => {
  const [navData, translation, footer] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('footer', { locale, populate: '*' }),
  ]);

  return {
    props: {
      navData,
      translation: translation.attributes,
      footer: footer.attributes,
    },
  };
};

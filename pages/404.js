import withLayout from 'components/layout/Layout';
import NotFound from 'components/pages/NotFound.jsx';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const NotFoundPage = () => {
  return <NotFound />;
};

export default withLayout(NotFoundPage);

export const getStaticProps = async ({ locale }) => {
  const [navData, translation, footer, links] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('footer', { locale, populate: '*' }),
    getData('link'),
  ]);

  return {
    props: {
      navData,
      translation: translation.attributes,
      links: links.attributes,
      footer: footer.attributes,
    },
  };
};

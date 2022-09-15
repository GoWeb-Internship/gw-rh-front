import Link from 'next/link';
import withLayout from 'components/layout/Layout';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const ProjectsPage = () => {
  return (
    <div>
      СТРАНИЦА ПРОЕКТОВ
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
    </div>
  );
};

export default withLayout(ProjectsPage);

export const getStaticProps = async ({ locale, locales }) => {
  const [navData, translation] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
  ]);

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
    },
  };
};

import Link from 'next/link';
import withLayout from 'components/layout/Layout';

import { getData, getNavigation } from '../../helpers/navigation';

const ProjectsPage = () => {
  return (
    <div>
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

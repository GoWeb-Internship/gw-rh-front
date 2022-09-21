import Link from 'next/link';
import withLayout from 'components/layout/Layout';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const ProjectsPage = ({projects}) => {

  return (
    <div>
      {projects.title}
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
    </div>
  );
};

export default withLayout(ProjectsPage);

export const getStaticProps = async ({ locale, locales }) => {
  const [navData, translation, projects] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('all-project', {locale, populate: '*'}, true),
  ]);

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      projects: projects.attributes,
    },
  };
};

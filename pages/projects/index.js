import Link from 'next/link';
import withLayout from 'components/layout/Layout';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

// const ProjectsPage = ({ projects }) => {
const ProjectsPage = () => {
  return (
    <div>
      {/* {projects.title} */}
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
    </div>
  );
};

export default withLayout(ProjectsPage);

export const getStaticProps = async ({ locale, locales }) => {
  // const [navData, translation, projects, footer] = await Promise.all([
  const [navData, translation, footer] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    // getData('all-project', { locale, populate: '*' }, true),
    getData('footer', { locale, populate: '*' }),
  ]);

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      footer: footer.attributes,
      // projects: projects.attributes,
    },
  };
};

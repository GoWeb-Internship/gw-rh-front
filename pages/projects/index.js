import withLayout from 'components/layout/Layout';
import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';
import AllProjects from 'components/pages/AllProjects';

const ProjectsPage = ({projects, translation}) => {

  return (
    <AllProjects data={projects} translation={translation}/>
  );
};

export default withLayout(ProjectsPage);

export const getStaticProps = async ({ locale, locales }) => {
  
  const [navData, translation, projects, footer] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('all-project', { locale, populate: '*' }),
    getData('footer', { locale, populate: '*' }),
  ]);

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      footer: footer.attributes,
      projects: projects.attributes,
    },
  };
};


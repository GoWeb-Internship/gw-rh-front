import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';
// import ReactMarkdown from 'react-markdown';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';
import AccordionComponent from '../../components/Accordion/Accordion';
import { normalizeProjectData } from '../../helpers/projectsServices';
import Overview from '../../components/projects/Overview';

const Projects = ({ projectData, translation }) => {
  const { isFallback } = useRouter();

  const { overview, accordionData } = projectData;

  if (isFallback) {
    return 'Loading...';
  }

  return (
    <div>
      <Overview overviewData={overview} translation={translation}/>
      {!!accordionData.length && (
        <AccordionComponent accordionData={accordionData} />
      )}
    </div>
  );
};

export default withLayout(Projects);

export const getStaticProps = async ({ locale, locales, params }) => {
  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  const [navData, translation, footer, projects] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('footer', { locale, populate: '*' }),
    getData('projects', {
      locale,
      'filters[slug][$eq]': params.slug,
      'populate[page_modules][populate][0]': 'id',
      'populate[overview][populate][0]': 'optionalSections,quotes',
      'populate[methodology][populate][0]': 'sections,page_module',
      'populate[benefit][populate][0]': 'section,page_module',
      'populate[modules_section][populate][0]': 'module,page_module',
      'populate[seminar][populate][0]': 'videoList,page_module',
      'populate[review][populate][0]':
        'videoList,textReviewsList.photo.url,page_module',
      'populate[price][populate][0]': 'page_module',
    }),
  ]);

  const data = projects[0].attributes;

  if (!data) {
    return {
      notFound: true,
    };
  }

  let projectData = null;
  try {
    projectData = normalizeProjectData(data);
  } catch (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      slug: params.slug,
      projectData,
      footer: footer.attributes,
    },
  };
};

export const getStaticPaths = async () => {
  const navData = await getData('projects', {
    locale: 'all',
    sort: 'navPosition',
    'pagination[pageSize]': 50,
  });

  const paths = navData.map(({ attributes }) => {
    const { locale, slug } = attributes;
    return { params: { slug }, locale };
  });

  return {
    paths,
    fallback: false,
  };
};

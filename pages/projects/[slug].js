import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';
import ReactMarkdown from 'react-markdown';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';
import AccordionComponent from '../../components/Accordion/Accordion';

const Projects = ({ md }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return 'Loading...';
  }

  return (
    <div>
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
      <AccordionComponent />
      <ReactMarkdown>{md}</ReactMarkdown>
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

  const [navData, translation, md, projects] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('tests', { 'filters[title][$contains]': 'Добавим' }, true),
    getData(
      'projects',
      { locale, 'filters[slug][$eq]': params.slug, populate: '*' },
      true,
    ),
  ]);

  const modules = projects[0].attributes;

  console.log('modules', modules);

  // console.log('modules', modules);

  // const data = await getData(
  //   `accordion-modules/${modules[0].id}`,
  //   { populate: '*' },
  //   true,
  // );

  // console.log('data', data);

  // const modulesSections = await Promise.all(
  //   modules.map(({ id }) =>
  //     getData(`accordion-modules/${id}`, { populate: '*' }, true),
  //   ),
  // );

  // console.log(
  //   'modulesSections',
  //   modulesSections.map(i => i.attributes.project_section),
  // );

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      slug: params.slug,
      md: md[0].attributes.markdown,
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

import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const Projects = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return 'Loading...';
  }

  return (
    <div>
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
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

  const [navData, translation] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
  ]);

  console.log(params.slug, Boolean(translation.attributes));

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      slug: params.slug,
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

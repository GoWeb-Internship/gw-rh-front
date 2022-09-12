import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

import { getData, getNavigation } from '../../helpers/navigation';

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
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const navData = await getData('pages', {
    locale: 'all',
    sort: 'navPosition',
    'pagination[pageSize]': 50,
  });

  const paths = navData
    .map(({ attributes }) => {
      const { locale, slug, singlePage } = attributes;
      if (!singlePage) {
        return null;
      }
      return { params: { slug }, locale };
    })
    .filter(i => i);

  return {
    paths,
    fallback: true,
  };
};

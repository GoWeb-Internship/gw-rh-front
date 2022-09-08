import Link from 'next/link';
import { useRouter } from 'next/router';
import { withLayout } from 'components/layout/Layout';

import { navigation, projects } from 'data/data';
import { getLocalNavData } from 'helpers/localize';

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

export const getStaticProps = ({ locale, locales }) => {
  const navData = getLocalNavData(navigation, locale);

  return {
    props: {
      locale,
      locales,
      navData,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    const localePaths = projects.reduce((acc, item) => {
      return [...acc, { params: { slug: item.slug }, locale }];
    }, []);
    paths.push(...localePaths);
  }

  return {
    paths,
    fallback: true,
  };
};

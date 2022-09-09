import Link from 'next/link';
import withLayout from 'components/layout/Layout';

import { navigation } from 'data/data';
import { getLocalNavData } from 'helpers/localize';

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

export const getStaticProps = ({ locale, locales }) => {
  const navData = getLocalNavData(navigation, locale);
  return {
    props: {
      locale,
      locales,
      navData,
    },
  };
};

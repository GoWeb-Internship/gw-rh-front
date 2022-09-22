import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

// import About from '../components/pages/About';
import Vlog from '../components/Vlog/Vlog';

import { getNavigation } from '../helpers/navigation';
import { getData } from '../helpers/apiServices';

const Pages = ({ locale, dataPage }) => {
  // console.log(dataPage);
  const router = useRouter();
  const { isFallback, query } = router;

  if (isFallback) {
    return 'Loading... или какой-то спиннер нацепить';
  }

  return (
    <>
      <p>Текущая страница: {query.slug}</p>
      <p>Текущий язык: {locale}</p>
      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
      <br />
      {dataPage.slug === 'vlog' && <Vlog data={dataPage.content} />}
    </>
  );
};

export default withLayout(Pages);

export const getStaticProps = async ({ locale, locales, params }) => {
  if (!params.slug) {
    return {
      notFound: true,
    };
  }
  console.log(params);
  const [navData, translation, footer] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('footer', { locale, populate: '*' }),
  ]);
  let dataPage = { slug: '', content: null };

  if (params.slug === 'vlog') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('vlog', {
      locale,
      populate: '*',
    });
  }

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      dataPage,
      footer: footer.attributes,
    },
  };
};

export const getStaticPaths = async () => {
  // сюда необходимо будет сделать запрос на получение навигации, для формирования динамической маршрутизации

  const navData = await getData('pages', {
    locale: 'all',
    sort: 'navPosition',
    'pagination[pageSize]': 50,
  });

  // Герерит массив путей, на основе навигации.
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
    fallback: false,
  };
};

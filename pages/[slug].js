import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

// import { pages } from 'data/data';

// import About from '../components/pages/About';
import Vlog from '../components/Vlog/Vlog';

import { getNavigation } from '../helpers/navigation';
import { getData } from '../helpers/apiServices';

const Pages = ({ locale, dataPage }) => {
  // console.log('dataPage', dataPage);
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
      {/* <Vlog data={video} /> */}
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

  const [navData, translation] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    // getData('section-video', { locale, populate: 'video.video' }, true),
  ]);
  // console.log('videoSection', videoSection);
  //дальше c помощью запросов на бек, получаем необходимы данные (с учётом локализации) и кидаем их как пропсы.
  let dataPage = { slug: '', content: null };

  if (params.slug === 'vlog') {
    dataPage.slug = params.slug;
    dataPage.content = await getData(
      'vlog',
      {
        locale,
        populate: '*',
      },
      true,
    );
  }
  // console.log('dataPage2', dataPage);
  // временно
  // const data = pages[params.slug] ?? { ru: {}, uk: {}, en: {}, cs: {} };

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      // data: { name: params.slug, content: data[locale] },
      // video: videoSection.attributes,
      dataPage,
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

import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

import { pages } from 'data/data';

import About from '../components/pages/About';

import {  getNavigation } from '../helpers/navigation';
import { getData } from '../helpers/apiServices';

const Pages = ({ locale, data }) => {
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

      {data.name === 'about' && <About data={data.content} />}
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
  ]);

  //дальше c помощью запросов на бек, получаем необходимы данные (с учётом локализации) и кидаем их как пропсы.

  // временно
  const data = pages[params.slug] ?? { ru: {}, uk: {}, en: {}, cs: {} };

  return {
    props: {
      locale,
      locales,
      navData,
      translation: translation.attributes,
      data: { name: params.slug, content: data[locale] },
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

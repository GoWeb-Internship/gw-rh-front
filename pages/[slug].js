import Link from 'next/link';
import { useRouter } from 'next/router';
import withLayout from 'components/layout/Layout';

import { navigation, pages } from 'data/data';
import { getLocalNavData } from 'helpers/localize';
import About from '../components/reusable/pages/About';

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

  // сюда необходимо будет сделать запрос на получение навигации, которую нужно будет передать в getLocalNavData
  const navData = getLocalNavData(navigation, locale);

  //дальше c помощью запросов на бек, получаем необходимы данные (с учётом локализации) и кидаем их как пропсы.

  // временно
  const data = pages[params.slug] ?? { ru: {}, uk: {}, en: {}, cz: {} };

  return {
    props: {
      locale,
      locales,
      navData,
      data: { name: params.slug, content: data[locale] },
    },
  };
};

export const getStaticPaths = ({ locales }) => {
  const paths = [];

  // сюда необходимо будет сделать запрос на получение навигации, для формирования динамической маршрутизации

  // Герерит массив путей, на основе навигации.
  for (const locale of locales) {
    const localePaths = navigation.reduce((acc, { slug, subCategory }) => {
      if (subCategory && subCategory.onPageNavigation) {
        return acc;
      }
      return [...acc, { params: { slug }, locale }];
    }, []);
    paths.push(...localePaths);
  }

  return {
    paths,
    fallback: false,
  };
};

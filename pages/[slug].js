import Link from 'next/link';
import { useRouter } from 'next/router';
import { withLayout } from 'components/layout/Layout';

import { navigation, pages } from 'data/data';
import { getLocalNavData } from 'helpers/localize';

const Pages = ({ locale, data }) => {
  const router = useRouter();
  const { isFallback, query } = router;

  if (isFallback) {
    return 'Loading... или какой-то спиннер нацепить';
  }

  return (
    <div>
      <p>Текущая страница: {query.slug}</p>
      <p>Текущий язык: {locale}</p>

      <Link href="/">
        <a className="inline-block p-4 bg-slate-400">To index page</a>
      </Link>
      <br />
      {data.name === 'about' && <About data={data.content} />}
    </div>
  );
};

export default withLayout(Pages);

const About = ({ data }) => (
  <>
    <section>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.goal}</p>
      </div>
    </section>
  </>
);

export const getStaticProps = ({ locale, locales, params }) => {
  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  // сюда необходимо будет сделать запрос на получение навигации, которую нужно будет передать в getLocalNavData
  const navData = getLocalNavData(navigation, locale);

  //дальше c помощью запросов на бек, получаем необходимы данные (с учётом локализации) и кидаем их как пропсы.

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

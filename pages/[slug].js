import { useRouter } from 'next/router';
import Head from 'next/head';

import withLayout from 'components/layout/Layout';

import Vlog from '../components/Vlog/Vlog';
import Afisha from '../components/Afisha/Afisha';
import Contacts from '../components/pages/Contacts';
import Consultation from '../components/Consultation/Consultation';
import Traveling from '../components/pages/Traveling';

import { getNavigation } from '../helpers/navigation';
import { getData } from '../helpers/apiServices';
import Soul from '../components/pages/Soul';

const Pages = ({ dataPage }) => {
  const router = useRouter();
  const { isFallback } = router;

  if (isFallback) {
    return 'Loading... или какой-то спиннер нацепить';
  }

  return (
    <>
      <Head>
        <title>{dataPage.content.attributes.mainTitle ? dataPage.content.attributes.mainTitle : dataPage.content.attributes.title}</title>
        <meta name="description" content={dataPage.content.attributes.subTitle? dataPage.content.attributes.subTitle : dataPage.content.attributes.title} />
      </Head>
      {dataPage.slug === 'vlog' && <Vlog data={dataPage.content} />}
      {dataPage.slug === 'announcements' && <Afisha data={dataPage.content} />}
      {dataPage.slug === 'contact-us' && <Contacts data={dataPage.content} />}
      {dataPage.slug === 'consultations' && (
        <Consultation data={dataPage.content} />
      )}
      {dataPage.slug === 'soul' && (
        <Soul data={dataPage.content.attributes.Soul} />
      )}

      {dataPage.slug === 'travels' && (
        <Traveling data={dataPage.content.attributes} />
      )}
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

  if (params.slug === 'announcements') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('afisha', {
      locale,
      populate: 'imageCard.image',
    });
  }

  if (params.slug === 'contact-us') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('form', {
      locale,
      populate: '*',
    });
  }

  if (params.slug === 'consultations') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('consultation', {
      locale,
      populate: '*',
    });
  }

  if (params.slug === 'soul') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('soul', {
      locale,
      populate: '*',
    });
  }

  if (params.slug === 'travels') {
    dataPage.slug = params.slug;
    dataPage.content = await getData('travel', {
      'populate[video]': '*',
      'populate[slider][populate][0]': 'image',
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
      if (!singlePage || slug === 'index') {
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

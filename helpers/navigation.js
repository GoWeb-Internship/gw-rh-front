import axios from 'axios';

export const getNavigation = async (
  collection,
  queryParams = { locale: 'en' },
  visibleNavAmount = 0,
) => {
  const navItems = await getData(collection, queryParams);

  const navData = [];

  for (const navItem of navItems) {
    const {
      attributes: { singlePage, title, slug, locale },
    } = navItem;
    navData.push({
      ...normalizeNavItem(title, slug, locale),
      subMenu: !singlePage ? await getSubMenu(slug, queryParams) : null,
    });
  }

  if (!visibleNavAmount) {
    return navData;
  }

  const croppedNavData = await getCloppedNavData(
    navData,
    visibleNavAmount,
    queryParams.locale,
  );

  return croppedNavData;
};

const getQueryParams = queryParams =>
  Object.keys(queryParams).reduce(
    (acc, item, id) => acc + (id ? '&' : '') + item + '=' + queryParams[item],
    '?',
  );

export const getData = async (collection, queryParams) => {
  let params = '';
  if (queryParams) {
    params = getQueryParams(queryParams);
  }
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/${collection}${params}`,
    );
    return data.data;
  } catch (error) {
    console.log('ERROR', error.message);
    return [];
  }
};

const normalizeNavItem = (name, id, locale) => ({ id, name, slug: id, locale });

const getSubMenu = async (slug, queryParams) => {
  const subMenu = await getData(slug, queryParams);

  const normalizeSubMenu = subMenu.map(({ attributes }) => {
    const { title, slug, locale } = attributes;
    return normalizeNavItem(title, slug, locale);
  });

  return normalizeSubMenu;
};

const getMoreNavItem = async (locale, subMenu) => {
  const { attributes } = await getData('translation', {
    locale,
    fields: 'showMore',
  });
  return {
    id: 'more',
    locale,
    name: attributes.showMore,
    slug: '',
    subMenu: subMenu ? subMenu : null,
  };
};

const getCloppedNavData = async (allNavData, visibleNavAmount, locale) => {
  const cropItems = allNavData.slice(0, visibleNavAmount);
  const cropperdSubMenu = allNavData.slice(visibleNavAmount);
  const normalizeSubMenu = cropperdSubMenu.map(({ name, id, locale }) =>
    normalizeNavItem(name, id, locale),
  );
  const moreItem = await getMoreNavItem(locale, normalizeSubMenu);

  return [...cropItems, moreItem];
};

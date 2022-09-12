const getNormalizedCategory =
  locale =>
  ({ locales, id, slug }) => ({
    id,
    slug,
    name: locales[locale],
  });

export const getLocalNavData = (allNavData, locale) => {
  const normalizeFunction = getNormalizedCategory(locale);

  const navData = allNavData.map(({ locales, id, slug, subMenu }) => {
    const localizedsubMenu = subMenu ? subMenu.map(normalizeFunction) : null;

    const normalizedCategory = normalizeFunction({ locales, id, slug });
    return {
      ...normalizedCategory,
      subMenu: localizedsubMenu,
    };
  });

  return navData;
};

export const getLocalNavData = (allNavData, locale) => {
  const navData = allNavData.map(({ locales, id, slug, subCategory }) => {
    const localizedSubCategory = subCategory
      ? {
          onPageNavigation: subCategory.onPageNavigation,
          items: subCategory.navigation.map(({ locales, id, slug }) => ({
            id,
            slug,
            name: locales[locale],
          })),
        }
      : null;

    return {
      id,
      slug,
      name: locales[locale],
      subCategory: localizedSubCategory,
    };
  });

  return navData;
};

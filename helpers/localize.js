const getNormalizedCategory =
  locale =>
  ({ locales, id, slug }) => ({
    id,
    slug,
    name: locales[locale],
  });

export const getLocalNavData = (allNavData, locale) => {
  const normalizeFunction = getNormalizedCategory(locale);

  const navData = allNavData.map(({ locales, id, slug, subCategory }) => {
    const localizedSubCategory = subCategory
      ? subCategory.map(normalizeFunction)
      : null;

    const normalizedCategory = normalizeFunction({ locales, id, slug });
    return {
      ...normalizedCategory,
      subCategory: localizedSubCategory,
    };
  });

  return navData;
};

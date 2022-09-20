export const normalizeProjectData = data => {
  const { title, subTitle, textContent, optionalSections } =
    data.overview.data.attributes;

  const normalizedData = {
    title: data.title,
    overview: {
      title,
      subTitle,
      textContent,
      optionalSections,
    },
    accordionData: [],
  };

  const dataKeys = Object.keys(data);

  for (const item of dataKeys) {
    if (!data[item]?.data?.attributes?.page_module?.data?.attributes?.title) {
      continue;
    }

    const { ...itemData } = data[item].data.attributes;
    const { id, attributes: pageModuleData } = itemData.page_module.data;

    const dataObject = {
      id,
      pageModuleTitle: pageModuleData.title,
      pageModulePosition: pageModuleData.onPagePosition,
      pageModuleIdentifier: pageModuleData.page_module_identifier,
      ...itemData,
      page_module: pageModuleData.title,
    };

    normalizedData.accordionData.push(dataObject);
  }

  normalizedData.accordionData.sort(
    (a, b) => a.pageModulePosition - b.pageModulePosition,
  );

  return normalizedData;
};

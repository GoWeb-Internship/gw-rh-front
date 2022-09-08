export const projects = [
  {
    id: '1',
    slug: 'rod-po-zolotomu-secheniyu',
    locales: {
      ru: 'Род по Золотому сечению',
      en: 'EN Род по Золотому сечению',
      uk: 'UK Род по Золотому сечению',
      cz: 'CZ Род по Золотому сечению',
    },
  },
  {
    id: '2',
    slug: 'how-open-love',
    locales: {
      ru: 'Как открыть в себе любовь',
      en: 'EN Как открыть в себе любовь',
      uk: 'UK Как открыть в себе любовь',
      cz: 'CZ Как открыть в себе любовь',
    },
  },
  {
    id: '3',
    slug: 'opening-talents',
    locales: {
      ru: 'Раскрытие талантов',
      en: 'EN Раскрытие талантов',
      uk: 'UK Раскрытие талантов',
      cz: 'CZ Раскрытие талантов',
    },
  },
];

export const consultations = [
  {
    id: '1',
    slug: 'couching',
    locales: {
      ru: 'Коучинг',
      en: 'EN Коучинг',
      uk: 'UK Коучинг',
      cz: 'CZ Коучинг',
    },
  },
  {
    id: '2',
    slug: 'consultations',
    locales: {
      ru: 'Психол консультации',
      en: 'EN Психол консультации',
      uk: 'UK Психол консультации',
      cz: 'CZ Психол консультации',
    },
  },
  {
    id: '3',
    slug: 'resolve-problems',
    locales: {
      ru: 'Решение проблем и выход из кризиса',
      en: 'EN Решение проблем и выход из кризиса',
      uk: 'UK Решение проблем и выход из кризиса',
      cz: 'CZ Решение проблем и выход из кризиса',
    },
  },
];

export const navigation = [
  {
    id: '1',
    slug: 'about',
    locales: {
      ru: 'Об авторе',
      en: 'About',
      uk: 'Про автора',
      cz: 'blablabla',
    },
    subCategory: null,
  },
  {
    id: '2',
    slug: 'projects',
    locales: {
      ru: 'Проекты',
      en: 'Projects',
      uk: 'Проекти',
      cz: 'blablabla2',
    },
    subCategory: {
      onPageNavigation: true,
      navigation: projects,
    },
  },
  {
    id: '3',
    slug: 'consultations',
    locales: {
      ru: 'Консультации',
      en: 'Consultations',
      uk: 'Консультації',
      cz: 'blablabla3',
    },
    subCategory: {
      onPageNavigation: false,
      navigation: consultations,
    },
  },
  {
    id: '4',
    slug: 'vlog',
    locales: {
      ru: 'Влог',
      en: 'Vlog',
      uk: 'Влог',
      cz: 'Vlog',
    },
    subCategory: null,
  },
];

export const pages = {
  about: {
    ru: {
      title: 'Об авторе',
      description: 'Меня зовут Павел и я разработчик',
      goal: 'Хочу работать, чтобы жить, а не жить, чтобы работать',
    },
    uk: {
      title: 'Про автора',
      description: 'Мене звати Павло і я розробник',
      goal: 'Хочу працювати для життя, а не жити для роботи',
    },
    en: {
      title: 'About author',
      description: 'My name is Pavel and i`m developer',
      goal: 'I want to work to live, not live to work',
    },
    cz: {
      title: 'Bla Bla',
      description: 'Bla Bla Pavel',
      goal: 'Bla Bla Bla Bla',
    },
  },
};

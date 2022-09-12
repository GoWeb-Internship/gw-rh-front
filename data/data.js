export const projects = [
  {
    id: '1',
    slug: 'rod-po-zolotomu-secheniyu',
    locales: {
      ru: 'Род по Золотому сечению',
      en: 'EN Род по Золотому сечению',
      uk: 'UK Род по Золотому сечению',
      cs: 'Cs Род по Золотому сечению',
    },
  },
  {
    id: '2',
    slug: 'how-open-love',
    locales: {
      ru: 'Как открыть в себе любовь',
      en: 'EN Как открыть в себе любовь',
      uk: 'UK Как открыть в себе любовь',
      cs: 'Cs Как открыть в себе любовь',
    },
  },
  {
    id: '3',
    slug: 'opening-talents',
    locales: {
      ru: 'Раскрытие талантов',
      en: 'EN Раскрытие талантов',
      uk: 'UK Раскрытие талантов',
      cs: 'Cs Раскрытие талантов',
    },
  },
];

export const navigation = [
  {
    id: '1',
    slug: '',
    locales: {
      ru: 'Об авторе',
      en: 'About',
      uk: 'Про автора',
      cs: 'blablabla',
    },
    subMenu: null,
  },
  {
    id: '2',
    slug: 'projects',
    locales: {
      ru: 'Проекты',
      en: 'Projects',
      uk: 'Проекти',
      cs: 'blablabla2',
    },
    subMenu: projects,
  },
  {
    id: '3',
    slug: 'consultations',
    locales: {
      ru: 'Консультации',
      en: 'Consultations',
      uk: 'Консультації',
      cs: 'blablabla3',
    },
    subMenu: null,
  },
  {
    id: '4',
    slug: 'vlog',
    locales: {
      ru: 'Влог',
      en: 'Vlog',
      uk: 'Влог',
      cs: 'Vlog',
    },
    subMenu: null,
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
    cs: {
      title: 'Bla Bla',
      description: 'Bla Bla Pavel',
      goal: 'Bla Bla Bla Bla',
    },
  },
};

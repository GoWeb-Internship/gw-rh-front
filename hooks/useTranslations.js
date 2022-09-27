import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const useTranslations = key => {
  const translation = useContext(TranslationContext);

  if (!key) {
    return translation;
  }

  let tr = null;

  if (typeof key === 'string') {
    tr = translation[key];
  }

  if (Array.isArray(key)) {
    tr = key.reduce((acc, item) => {
      // if (translation[item] === undefined) {
      //   return { ...acc };
      // }
      return { ...acc, [item]: translation[item] };
    }, {});
  }

  return tr;
};

export default useTranslations;

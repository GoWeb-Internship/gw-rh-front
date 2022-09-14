import React from 'react';
import PropTypes from 'prop-types';

// import { FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Backdrop from '../../../reusable/BackDrop';
import useShowElement from '../../../../hooks/useShowElement';
import LangSelect from './LangSelect';
import LangButton from './LangButton';

const getNormalizeData = lang => ({
  label: (lang === 'uk' ? 'ua' : lang).toUpperCase(),
  value: lang,
});

const LangSwitcher = ({ className = '' }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [render, show, classes, onToggle] = useShowElement();

  const langData = [
    getNormalizeData(activeLocale),
    ...locales.filter(lng => lng !== activeLocale).map(getNormalizeData),
  ];

  return (
    <>
      <div className={`relative cursor-pointer ${className}`}>
        <LangButton
          currentLanguage={getNormalizeData(activeLocale).label}
          isOpenMenu={show}
          onClick={onToggle}
        />
        {render && (
          <LangSelect
            langData={langData}
            className={classes}
            onClick={onToggle}
          />
        )}
      </div>
      {show && <Backdrop onClose={onToggle} transparent />}
    </>
  );
};

LangSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LangSwitcher;

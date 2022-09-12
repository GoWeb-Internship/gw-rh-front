import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { FiChevronDown } from 'react-icons/fi';
import LangBackdrop from './LangBackdrop';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DropdownArrowIcon from 'public/dropdownArrow.svg';

const getNormalizeData = lang => ({
  label: (lang === 'uk' ? 'ua' : lang).toUpperCase(),
  value: lang,
});

const LangSwitcher = ({ className = '' }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [opacity, setOpacity] = useState('opacity-0');
  const [isHidden, setIsHidden] = useState('hidden');
  const [pointerEvents, setPointerEvents] = useState('pointer-events-none');

  const onOpen = () => {
    setIsHidden('block');

    setPointerEvents('pointer-events-auto');

    setTimeout(() => {
      setOpacity('opacity-100');
    }, 0);
  };

  const onClose = () => {
    setOpacity('opacity-0');
    // setIsHidden('hidden');
    setPointerEvents('pointer-events-none');
    setTimeout(() => {
      setIsHidden('hidden');
    }, 200);
  };

  const handleClick = () => {
    if (isHidden === 'hidden') {
      onOpen();
    } else {
      onClose();
    }
  };

  const langData = [
    getNormalizeData(activeLocale),
    ...locales.filter(lng => lng !== activeLocale).map(getNormalizeData),
  ];

  return (
    <>
      <div
        className={`relative cursor-pointer ${className}`}
        onClick={handleClick}
      >
        <button
          aria-label={'Кнопка переключения языка'}
          id={'lang-switcher-button'}
          type="button"
          className="flex items-center px-3 py-2 font-navigation"
        >
          {getNormalizeData(activeLocale).label}
          <DropdownArrowIcon className={`ml-[12px] relative z-30`} />
        </button>
        {/* language selector list */}
        <ul
          className={`absolute top-0 left-0 w-full rounded-[4px] bg-white shadow-sh2 z-20 transition-opacity duration-200 ${isHidden} ${opacity} ${pointerEvents}`}
        >
          {langData.map(({ label, value }) => {
            const { pathname, query } = router;
            return (
              <li key={value} className="pt-2 last:pb-2">
                <Link href={{ pathname, query }} locale={value}>
                  <a className="font-navigation block px-3">{label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {isHidden !== 'hidden' && <LangBackdrop onClose={onClose} />}
    </>
  );
};

LangSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LangSwitcher;

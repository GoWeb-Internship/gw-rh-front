import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FiChevronDown } from 'react-icons/fi';
import LangBackdrop from './LangBackdrop';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const [rotate, setRotate] = useState('rotate-0');

  const onOpen = () => {
    setIsHidden('block');

    setPointerEvents('pointer-events-auto');
    setRotate('rotate-180');
    setTimeout(() => {
      setOpacity('opacity-100');
    }, 0);
  };

  const onClose = () => {
    setOpacity('opacity-0');
    // setIsHidden('hidden');
    setPointerEvents('pointer-events-none');
    setRotate('rotate-0');
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
        className={`relative cursor-pointer w-16  ${className}`}
        onClick={handleClick}
      >
        <button
          aria-label={'Кнопка переключения языка'}
          id={'lang-switcher-button'}
          type="button"
          className="flex items-center px-2 py-1 text-base font-bold"
        >
          {getNormalizeData(activeLocale).label}
          <FiChevronDown
            className={`icon ml-[7px] ${rotate} stroke-black transition duration-200 relative z-30`}
          />
        </button>
        {/* language selector list */}
        <ul
          className={`absolute top-0 left-0 w-full transition-opacity duration-200 ${isHidden} ${opacity} ${pointerEvents} rounded-md bg-gray-300 z-20`}
        >
          {langData.map(({ label, value }) => {
            const { pathname, query } = router;
            return (
              <li
                key={value}
                className="border-b border-b-black last:border-b-0"
              >
                <Link href={{ pathname, query }} locale={value}>
                  <a className="block px-2 py-1 text-base font-bold">{label}</a>
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

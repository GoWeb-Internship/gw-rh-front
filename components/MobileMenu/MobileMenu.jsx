import { useState, useEffect } from 'react';
import IconButton from '../reusable/IconButton';

import CloseIcon from 'public/closeButton.svg';
import Container from '../reusable/Container';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = ({ onClose, showMenu, navData = [] }) => {
  const [translateY, setTranslateY] = useState('-translate-y-[102%]');

  useEffect(() => {
    if (showMenu) {
      setTranslateY('translate-y-0');
    } else {
      setTranslateY('-translate-y-[102%]');
    }
  }, [showMenu]);

  return (
    <>
      <div
        id="mobile-menu"
        className={[
          'w-full pt-[120px] shadow-sh2 bg-white fixed top-0 left-0 z-20 transition-transform duration-500 max-h-full overflow-y-auto',
          translateY,
        ].join(' ')}
      >
        <Container className="pb-14">
          <IconButton
            IconComponent={CloseIcon}
            onClick={onClose}
            className={'ml-auto fill-main pb-1'}
          />
          <nav className={''}>
            <ul className="flex flex-col">
              {!!navData.length &&
                navData.map(item => (
                  <li key={item.id} className="relative">
                    <MobileMenuItem navItemData={item} />
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default MobileMenu;

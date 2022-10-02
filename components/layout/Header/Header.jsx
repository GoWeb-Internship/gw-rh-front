import { useEffect, useMemo } from 'react';
import useShowElement from '../../../hooks/useShowElement';

import Container from 'components/reusable/Container';
import LangSwitcher from './langSwitcher/LangSwitcher';
import NavMenu from './navigation/NavMenu';
import MobileMenu from '../../MobileMenu/MobileMenu';
import Backdrop from '../../reusable/BackDrop';
import IconButton from '../../reusable/IconButton';

import LogoIcon from 'public/logo-header.svg';
import BurgerIcon from 'public/burgerBtn.svg';
import Link from 'next/link';
import useMedia from '../../../hooks/useMedia';

const Header = ({ navData = [], translation }) => {
  const [render, show, , onToggle] = useShowElement('slow');
  const pageFormat = useMedia();

  const isDesktop = pageFormat === 'desktop';

  useEffect(() => {
    if (render) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [render]);

  const mobileMenuData = useMemo(
    () =>
      navData.reduce((acc, item) => {
        if (item.id !== 'more') {
          return [...acc, item];
        }
        return [...acc, ...item.subMenu];
      }, []),
    [navData],
  );

  return (
    <>
      <header className="bg-brand1 fixed top-0 w-full z-[1000]">
        <Container className="flex items-center py-7 md:py-7">
          <Link href="/">
            <a className="mr-auto">
              <LogoIcon />
            </a>
          </Link>
          <NavMenu navData={navData} className="hidden lg:block mr-12" />
          <Link href="#footer">
            <a
              className="font-navigation text-light py-3 hidden lg:block"
            >
              {translation.contacts}
            </a>
          </Link>
          <LangSwitcher className="ml-auto" />
          <IconButton
            IconComponent={BurgerIcon}
            onClick={onToggle}
            className="ml-4 lg:hidden"
          />
        </Container>
      </header>
      {pageFormat && !isDesktop && render && (
        <>
          <MobileMenu
            showMenu={show}
            onClose={onToggle}
            navData={mobileMenuData}
          />
          <Backdrop onClose={onToggle} transparent />
        </>
      )}
    </>
  );
};

export default Header;

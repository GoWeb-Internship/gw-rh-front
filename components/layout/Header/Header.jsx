import Container from 'components/reusable/Container';
import LangSwitcher from './langSwitcher/LangSwitcher';
import NavMenu from './navigation/NavMenu';
import IconButton from 'components/reusable/IconButton';

import LogoIcon from 'public/logo-header.svg';
import BurgerIcon from 'public/burgerBtn.svg';

const Header = ({ navData = [], translation }) => {
  return (
    <header className="bg-brand1">
      <Container className="flex items-center pt-[34px] pb-[38px] md:py-7">
        <LogoIcon className="mr-auto" />

        <NavMenu navData={navData} className="hidden lg:block mr-12" />
        <button
          type="button"
          className="font-navigation text-light py-3 hidden lg:block"
        >
          {translation.contacts}
        </button>
        <LangSwitcher className="ml-auto mr-4" />
        <IconButton IconComponent={BurgerIcon} />
      </Container>
    </header>
  );
};

export default Header;

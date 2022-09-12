import Container from 'components/reusable/Container';
import LangSwitcher from './langSwitcher/LangSwitcher';
import NavMenu from './navigation/NavMenu';

import LogoIcon from 'public/logo2.svg';
import BurgerIcon from 'public/burgerBtn.svg';

const Header = ({ navData = [], translation }) => {
  return (
    <header>
      <Container className="flex items-center py-2">
        <LogoIcon className="mr-auto" />

        <NavMenu navData={navData} className="hidden lg:block mr-12" />
        <button type="button" className="font-navigation py-3 hidden lg:block">
          {translation.contacts}
        </button>
        <LangSwitcher className="ml-auto mr-4" />
        <button type="button">
          <BurgerIcon />
        </button>
      </Container>
    </header>
  );
};

export default Header;

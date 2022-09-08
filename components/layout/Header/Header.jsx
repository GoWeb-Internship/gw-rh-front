import Container from 'components/reusable/Container';
import LangSwitcher from './langSwitcher/LangSwitcher';
import NavMenu from './navigation/NavMenu';

const Header = ({ navData = [] }) => {
  return (
    <header>
      <Container className="flex items-center justify-between py-2">
        <NavMenu navData={navData} />
        <LangSwitcher />
      </Container>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import DropDownOption from './DropDownOption';

const NavMenuItem = ({ navItemData }) => {
  const { subMenu, slug, name } = navItemData;

  return (
    <>
      {!subMenu ? (
        <Link href={`/${slug !== 'index' ? slug : ''}`}>
          <a className="block font-navigation text-light py-3">{name}</a>
        </Link>
      ) : (
        <DropDownOption subMenuData={navItemData} />
      )}
    </>
  );
};

export default NavMenuItem;

import { useState } from 'react';
import Link from 'next/link';
import SubMenu from './SubMenu';
import DropDownArrow from 'public/dropdownArrow.svg';

const NavMenuItem = ({ navItemData }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { subMenu, slug, name } = navItemData;

  if (!subMenu) {
    return (
      <Link href={`/${slug !== 'index' ? slug : ''}`}>
        <a className="font-navigation py-3">{name}</a>
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="font-navigation flex items-center py-3"
        onClick={() => setShowSubMenu(p => !p)}
      >
        <span className="mr-3 text-inherit">{name}</span>
        <DropDownArrow />
      </button>
      {subMenu && showSubMenu && <SubMenu navData={subMenu} from={slug} />}
    </>
  );
};

export default NavMenuItem;

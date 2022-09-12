import { useState } from 'react';
import Link from 'next/link';
import SubMenu from './SubMenu';

const NavMenuItem = ({ navItemData }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { subMenu, slug, name } = navItemData;

  if (!subMenu) {
    return (
      <Link href={`/${slug !== 'index' ? slug : ''}`}>
        <a className="font-navigation">{name}</a>
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className="font-navigation"
        onClick={() => setShowSubMenu(p => !p)}
      >
        {name}
      </button>
      {subMenu && showSubMenu && <SubMenu navData={subMenu} from={slug} />}
    </>
  );
};

export default NavMenuItem;

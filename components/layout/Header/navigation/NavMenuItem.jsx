import { useState } from 'react';
import Link from 'next/link';
import SubMenu from './SubMenu';

const NavMenuItem = ({ navItemData }) => {
  const [showSubCategory, setShowSubCategory] = useState(false);
  const { subCategory, slug, name } = navItemData;

  if (!subCategory) {
    return (
      <Link href={`/${slug}`}>
        <a>{name}</a>
      </Link>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setShowSubCategory(p => !p)}>
        {name}
      </button>
      {subCategory && showSubCategory && (
        <SubMenu
          navData={subCategory.items}
          external={subCategory.onPageNavigation}
          from={slug}
        />
      )}
    </>
  );
};

export default NavMenuItem;

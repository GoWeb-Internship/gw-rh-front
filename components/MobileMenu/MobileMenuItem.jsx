import Link from 'next/link';
import ArrowIcon from 'public/dropdownArrow.svg';
import MobileMenuSubMenu from './MobileMenuSubMenu';

const MobileMenuItem = ({ navItemData }) => {
  const { subMenu, slug, name } = navItemData;

  return (
    <>
      {!subMenu ? (
        <Link href={`/${slug !== 'index' ? slug : ''}`}>
          <a className="block font-navigation py-[10px] text-main after">
            {name}
          </a>
        </Link>
      ) : (
        <>
          <Link href={`/${slug !== 'index' ? slug : ''}`}>
            <a className="font-navigation py-[10px] flex items-center after">
              <span className="mr-3">{name}</span>
              <ArrowIcon className="stroke-main" />
            </a>
          </Link>
          {/* <p className="font-navigation py-[10px] flex items-center">
            <span className="mr-3">{name}</span>
            <ArrowIcon className="stroke-main" />
          </p> */}
          <MobileMenuSubMenu navData={subMenu} from={slug} />
        </>
      )}
    </>
  );
};

export default MobileMenuItem;

import Link from 'next/link';
import { after } from '../Header.module.scss';

const SubMenu = ({ navData = [], from = '', onClick, className = '' }) => {
  const hrefFrom = from ? `/${from}` : '';
  return (
    <ul
      className={`absolute bottom-0 translate-y-full py-4 max-w-[400px] rounded-[4px] overflow-hidden bg-light shadow-sh2 z-30 ${className}`}
    >
      {!!navData.length &&
        navData.map(({ id, slug, name }) => (
          <li key={id}>
            <Link href={`${hrefFrom}/${slug}`}>
              <a
                className={`font-navigation block whitespace-nowrap px-8 py-[10px] duration-100 transition-colors ${after}`}
                onClick={onClick}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SubMenu;

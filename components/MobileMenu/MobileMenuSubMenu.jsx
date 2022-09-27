import Link from 'next/link';

const MobileMenuSubMenu = ({ from = '', navData = [] }) => {
  const hrefFrom = from ? `/${from}` : '';

  return (
    <ul>
      {navData.length &&
        navData.map(({ id, name, slug }) => (
          <li key={id}>
            <Link href={`${hrefFrom}/${slug}`}>
              <a
                className={`font-navigation block px-4 py-[10px] duration-100 transition-colors after`}
              >
                {name}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MobileMenuSubMenu;

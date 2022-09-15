import Link from 'next/link';

const SubMenu = ({ navData = [], from = '', onClick, className = '' }) => {
  const hrefFrom = from ? `/${from}` : '';
  return (
    <ul
      className={`absolute bottom-0 translate-y-full py-2 max-w-[400px] rounded-[4px] overflow-hidden bg-light shadow-sh2 z-30 ${className}`}
    >
      {!!navData.length &&
        navData.map(({ id, slug, name }) => (
          <li key={id}>
            <Link href={`${hrefFrom}/${slug}`}>
              <a
                className="font-navigation block whitespace-nowrap px-8 py-3 duration-100 transition-colors hover:bg-brand1/10 focus:bg-brand1/10"
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

import Link from 'next/link';

const SubMenu = ({ navData = [], external = false, from = '' }) => {
  const separator = !external ? '#' : '/';
  return (
    <ul className="absolute bottom-0 translate-y-full w-[300px] p-5 bg-slate-200 z-50">
      {!!navData.length &&
        navData.map(({ id, slug, name }) => (
          <li key={id}>
            <Link href={`/${from}${separator}${slug}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SubMenu;

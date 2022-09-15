import Link from 'next/link';
import { useRouter } from 'next/router';

import DropdownArrowIcon from 'public/dropdownArrow.svg';

const LangSelect = ({ langData, className, onClick }) => {
  const { pathname, query } = useRouter();
  return (
    <ul
      className={`absolute top-0 left-0 w-full rounded-[4px] overflow-hidden bg-light shadow-sh2 z-20 ${className}`}
    >
      {langData.map(({ label, value }, id) => {
        return (
          <li key={value}>
            <Link href={{ pathname, query }} locale={value}>
              <a
                onClick={onClick}
                className="font-navigation flex gap-x-3 items-center px-3 py-2 duration-100 transition-colors hover:bg-brand1/10 focus:bg-brand1/10"
              >
                <span>{label}</span>
                {!id && <DropdownArrowIcon className="stroke-main" />}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LangSelect;

import Link from 'next/link';

const LinkToBook = ({ className = '' }) => {
  return (
    <Link href="/">
      <a className={`block text-brand1 text-lg leading-[21px] font-medium underline ${className}`}>
        To buy book
      </a>
    </Link>
  );
};

export default LinkToBook;
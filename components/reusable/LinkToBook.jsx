import Link from 'next/link';

const LinkToBook = ({ className = '', text }) => {
  return (
    <Link href="/">
      <a className={`block text-brand1 text-lg leading-[21px] font-medium underline ${className}`}>
        {text}
      </a>
    </Link>
  );
};

export default LinkToBook;
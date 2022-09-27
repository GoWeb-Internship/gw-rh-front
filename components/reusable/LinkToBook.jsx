import Link from 'next/link';

const LinkToBook = ({ className = '', text }) => {
  return (
    <Link href="https://lovebook.rizhenko.com/" >
      <a rel="noreferrer noopener nofollow" aria-label="link to book" target="blank" className={`block text-brand1 text-lg leading-[21px] font-semibold underline hover:text-blue focus:text-blue transition-colors duration-200 ${className}`}>
        {text}
      </a>
    </Link>
  );
};

export default LinkToBook;
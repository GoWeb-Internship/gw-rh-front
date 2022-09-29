const Quote = ({ quote, className = '' }) => {
  return (
    <p
      className={`relative pl-7 text-t1824 w-full font-semibold text-brand1 before:content-[' '] before:absolute before:top-0 before:left-0 before:w-1 before:h-full lg:before:w-full lg:before:h-1 lg:px-0 lg:pt-7 before:bg-brand1 lg:max-w-[280px] ${className}`}
    >
      {quote}
    </p>
  );
};

export default Quote;

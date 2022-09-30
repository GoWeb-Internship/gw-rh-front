import Quote from './Quote';

const Quotes = ({ quotesList }) => {
  return (
    <div className="mb-4 md:mb-6 lg:block lg:mb-0 lg:shrink-0">
      {quotesList.map(({ id, item }) => (
        <Quote
          key={id}
          quote={item}
          className="hidden first:block lg:block mb-6 last:mb-0 lg:mb-[200px]"
        />
      ))}
    </div>
  );
};

export default Quotes;

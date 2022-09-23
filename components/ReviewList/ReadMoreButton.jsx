const ReadMoreButton = ({ onClick, showAllText, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} text-brand1 ml-auto text-t1421 py-1 underline`}
    >
      {showAllText ? 'Свернуть' : 'Читать больше'}
    </button>
  );
};

export default ReadMoreButton;

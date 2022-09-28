import PropTypes from 'prop-types';

const ButtonShow = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={['text-t1821 text-brand1 underline font-semibold', className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonShow.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonShow;

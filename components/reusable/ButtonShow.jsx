import PropTypes from 'prop-types';

const ButtonShow = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="text-t1821 text-brand1 font-medium underline"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonShow.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonShow;

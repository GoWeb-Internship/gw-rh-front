import PropTypes from 'prop-types';

const ButtonShow = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="text-t1821 text-brand1 font-medium underline font-semibold"
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

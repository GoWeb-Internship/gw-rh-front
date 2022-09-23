import classnames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({ type, register, error = false }) => {
  const borderColor = classnames(
    { 'border-red-500': error },
    { 'border-blue': !error },
  );

  return (
    <input
      className={`${borderColor} w-full py-5 px-4 text-sm border rounded-sm mb-4`}
      type={type}
      id={type}
      name={type}
      {...register(`${type}`)}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

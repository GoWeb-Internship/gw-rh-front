import classnames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({
  type,
  register,
  placeholder,
  hasError = false,
  errorMessage,
}) => {
  const borderColor = classnames(
    { 'border-red-500': hasError },
    { 'border-blue': !hasError },
  );
  const placeholderMsg = hasError ? errorMessage : placeholder;

  return (
    <>
      <input
        className={`${borderColor} w-full py-5 px-4 border rounded-sm `}
        type={type}
        id={type}
        name={type}
        placeholder=""
        {...register(`${type}`)}
      />
      <label
        htmlFor={type}
        className="absolute left-4 top-1/2 -translate-y-1/2  text-base lg:text-sm hover:text-[11px] focus:text-[11px] hover:top-1 hover:translate-y-0"
      >
        <span>{placeholderMsg}</span>
      </label>
    </>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

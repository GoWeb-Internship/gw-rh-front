import classnames from 'classnames';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';

const Input = ({
  type,
  register,
  placeholder,
  hasError = false,
  errorMessage,
}) => {
  const borderColor = classnames(
    { 'border-red': hasError },
    { 'border-blue': !hasError },
  );
  const textColor = classnames(errorMessage && 'text-red');
  const placeholderMsg = hasError ? errorMessage : placeholder;
  // console.log(type);
  return (
    <>
      <input
        className={`${borderColor} w-full py-5 px-4 border rounded-sm [&:focus_+_label]:-translate-y-5 [&:focus_+_label]:-translate-x-2 [&:focus_+_label]:text-[11px] [&:not(:placeholder-shown)_+_label]:-translate-x-2 [&:not(:placeholder-shown)_+_label]:-translate-y-5 [&:not(:placeholder-shown)_+_label]:text-[11px]`}
        type={type}
        id={type}
        name={type}
        placeholder=" "
        {...register(`${type}`)}
      />
      <label
        htmlFor={type}
        className={`${textColor} absolute left-4 top-5 text-base lg:text-sm transition-transform duration-200`}
      >
        {placeholderMsg}
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

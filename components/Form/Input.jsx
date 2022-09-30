import classnames from 'classnames';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import { Controller } from 'react-hook-form';

import 'react-phone-input-2/lib/style.css';

const Input = ({
  type,
  register,
  placeholder,
  hasError = false,
  errorMessage,
  control,
}) => {
  const borderColor = classnames(
    { '!border-red': hasError },
    { '!border-blue': !hasError },
  );

  const textColor = classnames(errorMessage && 'text-red');
  const opacity = classnames(
    { 'opacity-100 left-[9px] top-[0.5px]': errorMessage },
    { 'opacity-0 left-4 top-5': !errorMessage },
  );

  const placeholderMsg = hasError ? errorMessage : placeholder;
  const placeMsg = hasError ? (placeholder = '') : placeholder;

  if (type !== 'tel') {
    return (
      <>
        <input
          className={`${borderColor} w-full py-5 px-4 border-2 rounded-sm [&:focus_+_label]:-translate-y-5 [&:focus_+_label]:-translate-x-2 [&:focus_+_label]:text-[11px] [&:not(:placeholder-shown)_+_label]:-translate-x-2 [&:not(:placeholder-shown)_+_label]:-translate-y-5 [&:not(:placeholder-shown)_+_label]:text-[11px]`}
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
  }

  if (type === 'tel') {
    return (
      <>
        <label
          htmlFor={type}
          className={`${textColor} ${opacity} absolute  z-[100] text-[11px] transition-transform duration-200`}
        >
          {placeholderMsg}
        </label>

        <Controller
          name={type}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <PhoneInput
              placeholder={placeMsg}
              disableSearchIcon="true"
              buttonClass={'hidden'}
              inputClass={`${borderColor} !w-full !px-4 !py-5 !h-[66px] placeholder:text-black target:placeholder:hidden !border-2 !rounded-sm`}
              {...field}
            />
          )}
        />
      </>
    );
  }
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
};

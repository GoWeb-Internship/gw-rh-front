import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import useFormPersist from 'react-hook-form-persist';

import Input from './Input';

const isBrowser = typeof window !== 'undefined';

const Form = ({ inputsData, textareaMsg, btn, errorMessage }) => {
  const schema = yup.object({
    text: yup
      .string()
      .required(errorMessage.required)
      .min(3, `${errorMessage.min} 3 ${errorMessage.symbol}`)
      .max(10, `${errorMessage.max} 10 ${errorMessage.symbol} `)
      .matches(
        /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]{1}[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ0-9' ]+$/,
        errorMessage.validName,
      ),
    email: yup
      .string()
      .required(errorMessage.required)
      .email(errorMessage.validEmail)
      .min(3, `${errorMessage.min} 3 ${errorMessage.symbol}`)
      .max(16, `${errorMessage.max} 10 ${errorMessage.symbol} `)
      .matches(
        /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-/]+[a-zA-Z0-9+_./-]+@[a-zA-Z0-9_.-]+$/,
        errorMessage.validEmail,
      ),
    tel: yup
      .string()
      .required(errorMessage.required)
      .min(9, `${errorMessage.min} 9 ${errorMessage.symbol}`)
      .max(13, `${errorMessage.max} 13 ${errorMessage.symbol} `),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  useFormPersist('form', {
    watch,
    setValue,
    storage: isBrowser ? window.sessionStorage : null,
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="lg:w-1/2 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputsData &&
          inputsData.map(({ type, placeholder }) => {
            const hasError = errors[type] ? true : false;

            return (
              <div key={type} className="relative mb-4">
                <Input
                  hasError={hasError}
                  type={type}
                  placeholder={placeholder}
                  register={register}
                  errorMessage={errors[type] ? errors[type]?.message : ''}
                />
              </div>
            );
          })}
        <div className="relative mb-6 md:mb-[30px] lg:mb-10">
          <textarea
            id="message"
            type="text"
            className="resize-none w-full h-36 py-5 px-4 text-sm border border-blue rounded-sm"
            {...register('message')}
          />
          <label
            htmlFor="message"
            className="absolute left-[15px] top-5 lg:top-4 "
          >
            {textareaMsg}
          </label>
        </div>
        <button className="btn btnPrimary" type="submit">
          {btn}
        </button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  inputsData: PropTypes.arrayOf(PropTypes.object),
  textareaMsg: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

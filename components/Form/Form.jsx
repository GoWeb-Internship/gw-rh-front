import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import useFormPersist from 'react-hook-form-persist';

import formSchema from '../../model/formSchema';
import Input from './Input';
import useTranslations from '../../hooks/useTranslations';
import { sendMessageToTg } from '../../helpers/apiServices';

const isBrowser = typeof window !== 'undefined';

const Form = ({
  inputsData,
  textareaMsg,
  errorMessage,
  openModal,
  fromForm,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema(errorMessage)),
    mode: 'onSubmit',
  });

  useFormPersist('form', {
    watch,
    setValue,
    storage: isBrowser ? window.sessionStorage : null,
  });

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.text}
    Email: ${data.email}
    Phone: ${data.tel}
    Message: ${data.message}
    <b>Additional information:</b>
    <i>From: ${fromForm}</i>
    <a href="https://gw-rh-front-edb7.vercel.app/contact-us">https://gw-rh-front-edb7.vercel.app/contact-us</a>
    ------
    `;

    sendMessageToTg(message)
      .then(() => {
        openModal();
      })
      .catch(error => alert(error))
      .finally(() => {
        reset();
        localStorage.removeItem(`form`);
      });
  };

  const btn = useTranslations('sendBtn');

  return (
    <div className="lg:w-1/2 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputsData &&
          inputsData.map(({ type, placeholder }) => {
            const hasError = errors[type] ? true : false;

            return (
              <div key={type} className="relative mb-4">
                <Input
                  control={control}
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
            placeholder={textareaMsg}
            className="resize-none w-full h-36 py-5 px-4 text-sm border-2 border-blue rounded-sm placeholder:text-main"
            {...register('message')}
          />
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
};

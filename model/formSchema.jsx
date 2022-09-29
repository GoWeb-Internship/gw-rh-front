import * as yup from 'yup';

const formSchema = errorMessage => {
  const schema = yup.object({
    text: yup
      .string()
      .required(errorMessage.required)
      .min(3, `${errorMessage.min} 3 ${errorMessage.symbol}`)
      .max(50, `${errorMessage.max} 50 ${errorMessage.symbol} `)
      .matches(
        /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]{1}[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ0-9' ]+$/,
        errorMessage.validName,
      ),
    email: yup
      .string()
      .required(errorMessage.required)
      .email(errorMessage.validEmail)
      .min(10, `${errorMessage.min} 10 ${errorMessage.symbol}`)
      .max(50, `${errorMessage.max} 50 ${errorMessage.symbol} `)
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

  return schema;
};

export default formSchema;

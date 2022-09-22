import { useForm } from 'react-hook-form';
// import useFormPersist from 'react-hook-form-persist';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import Button from '../reusable/Button';

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Section className="py-9 lg:py-20" id="about author">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[464px]">
            <h1 className="font-semibold text-lg tracking-[0.005em] leading-7 text-[#065A92] mb-4 md:text-28 md:tracking-normal md:mb-6 lg:mb-14">
              Заполните форму, чтобы записаться на курс или консультацию.
            </h1>
            <p className="font-semibold leading-6 text-[#3497D8] mb-6 md:mb-16 lg:mb-0">
              Если остались вопросы - оставьте сообщение.
            </p>
          </div>
          <div className="lg:w-1/2 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  {errors.email ? (
                    <span className="text-red-500">{errors.name?.message}</span>
                  ) : (
                    <span>Name</span>
                  )}
                  <input
                    id="name"
                    type="text"
                    className="w-full py-5 px-4 text-sm"
                    {...register('name', {
                      required: 'Введите корректное имя',
                    })}
                    placeholder="Имя"
                  />
                </label>
              </div>

              <div>
                <label>
                  {errors.email ? (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  ) : (
                    <span>Email</span>
                  )}
                  <input
                    id="email"
                    type="email"
                    className="w-full py-5 px-4 text-sm border-blue"
                    {...register('email', {
                      required: 'Введите корректный email адрес',
                    })}
                  />
                </label>
              </div>
              <div>
                <label>
                  {errors.email ? (
                    <span className="text-red-500">
                      {errors.phone?.message}
                    </span>
                  ) : (
                    <span>Телефон</span>
                  )}
                  <input
                    id="number"
                    type="tel"
                    className="w-full py-5 px-4 text-sm"
                    {...register('phone', {
                      required: 'Введите корректный номер телефона',
                    })}
                  />
                </label>
              </div>
              <div>
                <label>
                  Сообщение
                  <textarea
                    id="text"
                    type="text"
                    className="resize-none w-full  h-36 py-5 px-4 text-sm"
                    {...register('text')}
                  />
                </label>
              </div>
              <Button type="submit" text="Отправить" />
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Form;

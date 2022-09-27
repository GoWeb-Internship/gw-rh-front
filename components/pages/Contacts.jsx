import Section from '../reusable/Section';
import Container from '../reusable/Container';
import Form from '../Form/Form';

const Contacts = ({ btn, data: { attributes } }) => {
  const { title, validation, message, error } = attributes;

  return (
    <Section className="py-[152px]  lg:py-[244px]" id="contact form">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[464px]">
            <h1 className="font-semibold text-lg tracking-[0.005em] uppercase leading-7 text-[#065A92] mb-4 md:text-28 md:tracking-normal md:mb-6 lg:mb-14">
              {title}
            </h1>
          </div>
          <Form
            inputsData={validation}
            errorMessage={error}
            textareaMsg={message}
            btn={btn}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Contacts;

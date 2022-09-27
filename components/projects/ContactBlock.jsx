import Button from '../reusable/Button';
import Container from '../reusable/Container';
import Head from '../reusable/Head';

const ContactBlock = ({ data }) => {
  const { title, subTitle, buttonText1, buttonText2 } = data;
  return (
    <section>
      <Container className="project-container">
        <Head title={title} className="mb-2 md:max-w-full md:mb-8" />
        <p className="mb-8 text-qqBase font-semibold text-brand1 max-w-[460px] md:mb-16 left-container">
          {subTitle}
        </p>
        <div className="md:flex md:gap-x-[18px]">
          <Button
            linkTo={'/contact-us/'}
            text={buttonText1}
            buttonTheme="type3"
            className="mb-6 md:mb-0"
          />
          <Button
            linkTo={'contact-us/'}
            text={buttonText2}
            buttonTheme="type4"
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactBlock;

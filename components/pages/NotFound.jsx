import useTranslations from 'hooks/useTranslations.js';

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';

const NotFound = () => {
  const {title404, text404} = useTranslations(['title404', 'text404']);
  return (
    <Section className="pt-[184px] pb-40 md:pb-[468px] lg:pt-[296px] lg:pb-[310px] treeBg">
      <Container className="px-10 md:px-[264px] lg:px-[620px] text-center">
        <h1 className="mb-4 font-bold text-52 text-main">404</h1>
        <p className="mb-2 text-brand1">{title404}</p>
        <p className="text-sm leading-4">{text404}</p>
      </Container>
    </Section>
  );
};

export default NotFound;

import ReactMarkdown from 'react-markdown';

import Container from './Container';
import Head from './Head';
import Section from './Section';

const InfoPage = ({ title, description, body, quote }) => {
  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-16 lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <Head title={title} isColor className="!text-4xl mb-6" />
        <p className="font-semibold text-brand1 mb-4 md:mb-14 lg:mb-8 lg:w-[656px]">
          {description}
        </p>
        <div className="lg:flex lg:justify-between">
          <ReactMarkdown className="prose lg:w-[656px]">{body}</ReactMarkdown>
          <p className="hidden lg:block w-[272px] font-semibold text-lg text-brand1 md:ml-auto md:mb-6 lg:ml-0 before:content-[''] before:block before:h-1 before:w-full before:bg-brand1 before:mb-6">{quote}</p>
        </div>
      </Container>
    </Section>
  );
};

export default InfoPage;

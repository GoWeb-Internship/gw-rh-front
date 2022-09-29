import ReactMarkdown from 'react-markdown';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import Collapse from '../reusable/Collapse';
import LinkToBook from '../reusable/LinkToBook';
import useTranslations from '../../hooks/useTranslations';

const About = ({ data }) => {
  const linkToBook = useTranslations('linkToBook');

  return (
    <Section className="py-9 md:py-[124px]" id="about author">
      <Container>
        <h2 className="mb-6 md:mb-[52px] lg:mb-14 text-28 font-semibold text-left md:pl-[350px] lg:pl-[480px] uppercase">
          {data.aboutTitle}
        </h2>
        <div className="lg:flex lg:justify-between">
          <p className="mb-4 w-[280px] lg:w-[272px] font-semibold text-lg text-brand1 md:ml-auto md:mb-6 lg:ml-0 before:content-[''] before:block before:h-1 before:w-full before:bg-brand1 before:mb-6">
            {data.quote}
          </p>
          <div>
            <Collapse>
              <ReactMarkdown className="prose prose-em:text-blue prose-em:not-italic w-[656px]">
                {data.body}
              </ReactMarkdown>
            </Collapse>

            <LinkToBook text={linkToBook}/>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;

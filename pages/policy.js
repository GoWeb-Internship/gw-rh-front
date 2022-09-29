import ReactMarkdown from 'react-markdown';
import withLayout from 'components/layout/Layout';
import Heading from 'components/reusable/Heading';
import Container from 'components/reusable/Container';
import Section from 'components/reusable/Section';

import { getNavigation } from 'helpers/navigation';
import { getData } from 'helpers/apiServices';

const PolicyPage = ({ policy }) => {
  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <Heading
          tag="h1"
          text={policy.mainTitle}
          className="text-28 mb-4 uppercase font-semibold text-brand1 md:text-t3642 md:mb-6 lg:mb-8"
        />
        <ReactMarkdown className="prose">{policy.body}</ReactMarkdown>
        {policy.section.length ? (
          <>
            {policy.section.map(sectionData => (
              <div key={sectionData.id} className="first:mt-0 mt-8 md:mt-14">
                <Heading
                  tag="h2"
                  text={sectionData.title}
                  className="text-lg font-semibold uppercase mb-4 md:text-t2444 md:mb-4 lg:mb-6"
                />
                <ReactMarkdown className="prose">
                  {sectionData.body}
                </ReactMarkdown>
              </div>
            ))}
          </>
        ) : null}
      </Container>
    </Section>
  );
};

export default withLayout(PolicyPage);

export const getStaticProps = async ({ locale }) => {
  const [navData, translation, policy, footer] = await Promise.all([
    getNavigation('pages', { locale, sort: 'navPosition' }, 5),
    getData('translation', { locale }),
    getData('policy', { locale, populate: '*' }),
    getData('footer', { locale, populate: '*' }),
  ]);

  return {
    props: {
      navData,
      translation: translation.attributes,
      policy: policy.attributes,
      footer: footer.attributes,
    },
  };
};

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Head from 'components/reusable/Head';
import ShortProject from 'components/reusable/ShortProject';

const AllProjects = ({ data, translation }) => {

  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[124px] lg:pt-[244px]">
      <Container>
        <Head Tag="h1" title={data.title} isColor className="text-4xl !mb-4 md:mb-6 md:text-4xl"/>
        <p className="font-semibold text-brand1 mb-8 md:mb-16 lg:mb-[124px] lg:w-[656px]">{data.description}</p>
        <ul>
          {data.projectShort &&
            data.projectShort.map((pr, idx) => (
              <ShortProject data={pr} translation={translation} nav={idx+1} key={pr.id} />
            ))}
        </ul>
      </Container>
    </Section>
  );
};

export default AllProjects;

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Head from 'components/reusable/Head';
import ShortProject from 'components/reusable/ShortProject';

const AllProjects = ({ title, data, link }) => {

  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[124px] lg:pt-[244px]">
      <Container>
        <Head Tag="h1" title={title.title} isColor className="text-4xl !mb-4 md:mb-6 md:text-4xl"/>
        <p className="font-semibold text-brand1 mb-8 md:mb-16 lg:mb-[124px] lg:w-[656px]">{title.description}</p>
        <ul>
          {data &&
            data.map((pr) => (
              <ShortProject data={pr} key={pr.id} link={link}/>
            ))}
        </ul>
      </Container>
    </Section>
  );
};

export default AllProjects;

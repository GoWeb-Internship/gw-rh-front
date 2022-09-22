import Container from '../reusable/Container';
import SectionType1 from '../sections/SectionType1';

const BenefitsBlock = ({ data }) => {
  return (
    <section>
      <Container className="project-container">
        <SectionType1 data={data.section} />
      </Container>
    </section>
  );
};

export default BenefitsBlock;

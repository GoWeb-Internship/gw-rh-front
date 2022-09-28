import Container from '../reusable/Container';
import SectionType1 from '../sections/SectionType1';

const BenefitsBlock = ({ data }) => {
  return (
    <section className="sections-py">
      <Container>
        <SectionType1 data={data.section} />
      </Container>
    </section>
  );
};

export default BenefitsBlock;

import Container from '../reusable/Container';
import SectionType1 from '../sections/SectionType1';

const MethodologyBlock = ({ data }) => {
  const { sections } = data;
  return (
    <>
      {sections.length ? (
        <section className="sections-py">
          <Container>
            {sections.map(sectionData => (
              <SectionType1
                key={sectionData.id}
                data={sectionData}
                firstElementClass={'first:mt-0 mt-8 md:mt-14 lg:mt-14'}
              />
            ))}
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default MethodologyBlock;

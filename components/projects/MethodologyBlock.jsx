import SectionType1 from '../sections/SectionType1';

const MethodologyBlock = ({ data }) => {
  const { sections } = data;
  return (
    <>
      {sections.map(sectionData => (
        <SectionType1 key={sectionData.id} data={sectionData} />
      ))}
    </>
  );
};

export default MethodologyBlock;

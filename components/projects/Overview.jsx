import ReactMarkdown from 'react-markdown';
import Quote from '../Quote/Quote';
import Container from '../reusable/Container';
import ProjectContentBox from '../reusable/ProjectContentBox';
import SectionType1 from '../sections/SectionType1';
import Collapse from '../reusable/Collapse';

const Overview = ({ overviewData }) => {
  const { title, subTitle, textContent, quotes, optionalSections } =
    overviewData;

  return (
    <section className="pt-[120px]">
      <Container className="project-container">
        <h1 className="mb-6 text-t3642 font-semibold text-brand1 left-container">
          {title.toUpperCase()}
        </h1>
        <p className="mb-4 font-semibold text-brand1 lg:mb-14 left-container">
          {subTitle}
        </p>
        <ProjectContentBox>
          <Collapse>
            <ReactMarkdown className={`prose left-container`}>
              {textContent}
            </ReactMarkdown>
          </Collapse>

          {!!quotes.length && (
            <div className="hidden mt-6 lg:block lg:mt-0 lg:shrink-0">
              {quotes.map(({ id, item }) => (
                <Quote key={id} quote={item} />
              ))}
            </div>
          )}
        </ProjectContentBox>
        {optionalSections.length ? (
          <>
            {optionalSections.map(sectionData => (
              <SectionType1
                key={sectionData.id}
                data={sectionData}
                firstElementClass={'mt-8 md:mt-14 lg:mt-14'}
              />
            ))}
          </>
        ) : null}
      </Container>
    </section>
  );
};

export default Overview;

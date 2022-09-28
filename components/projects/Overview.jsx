import ReactMarkdown from 'react-markdown';
import Quote from '../Quote/Quote';
import Container from '../reusable/Container';
import ProjectContentBox from '../reusable/ProjectContentBox';
import SectionType1 from '../sections/SectionType1';
import Collapse from '../reusable/Collapse';

const Overview = ({ overviewData, translation }) => {
  const { title, subTitle, textContent, quotes, optionalSections } =
    overviewData;

  return (
    <section className="pt-[120px]">
      <Container className="sections-py">
        <h1 className="mb-6 text-t3642 font-semibold text-brand1 left-container">
          {title.toUpperCase()}
        </h1>
        <p className="mb-4 font-semibold text-brand1 lg:mb-14 left-container">
          {subTitle}
        </p>
        <Collapse translate={translation} maxHeight={504}>
          <div>
            <ProjectContentBox reverse>
              {!!quotes.length && (
                <div className="mb-4 md:mb-6 lg:block lg:mb-0 lg:shrink-0">
                  {quotes.map(({ id, item }) => (
                    <Quote
                      key={id}
                      quote={item}
                      className="mb-6 last:mb-0 lg:mb-[124px]"
                    />
                  ))}
                </div>
              )}
              <ReactMarkdown className={`prose left-container`}>
                {textContent}
              </ReactMarkdown>
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
          </div>
        </Collapse>
      </Container>
    </section>
  );
};

export default Overview;

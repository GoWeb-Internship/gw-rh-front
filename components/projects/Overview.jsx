import ReactMarkdown from 'react-markdown';
import Container from '../reusable/Container';
import ProjectContentBox from '../reusable/ProjectContentBox';
import SectionType1 from '../sections/SectionType1';
import Collapse from '../reusable/Collapse';
import Quotes from '../reusable/Quotes/Quotes';

const Overview = ({ overviewData, translation }) => {
  const { title, subTitle, textContent, quotes, optionalSections } =
    overviewData;

  return (
    <section className="pt-[120px]">
      <Container className="sections-py">
        <h1 className="mb-6 text-28 md:text-t3642 font-semibold text-brand1 left-container">
          {title.toUpperCase()}
        </h1>
        <p className="mb-4 font-semibold text-brand1 lg:mb-14 left-container">
          {subTitle}
        </p>
        <Collapse translate={translation} maxHeight={504}>
          <div>
            <ProjectContentBox reverse>
              {!!quotes.length && <Quotes quotesList={quotes} />}
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

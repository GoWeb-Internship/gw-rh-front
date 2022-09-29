import ReactMarkdown from 'react-markdown';
import Head from '../reusable/Head';
import ProjectContentBox from '../reusable/ProjectContentBox';
import Quotes from '../reusable/Quotes/Quotes';

const SectionType1 = ({ data, Tag = 'h2', firstElementClass }) => {
  const { title, showTitle, body, quotes } = data;
  return (
    <>
      <Head
        title={title}
        Tag={Tag}
        showTitle={showTitle}
        className={[firstElementClass, 'mb-6 lg:mb-14'].join(' ')}
      />
      <ProjectContentBox reverse>
        {!!quotes.length && <Quotes quotesList={quotes} />}
        <ReactMarkdown className="prose left-container mr-auto">
          {body}
        </ReactMarkdown>
      </ProjectContentBox>
    </>
  );
};

export default SectionType1;

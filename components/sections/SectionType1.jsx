import ReactMarkdown from 'react-markdown';
import Quote from '../Quote/Quote';
import Head from '../reusable/Head';
import ProjectContentBox from '../reusable/ProjectContentBox';

const SectionType1 = ({ data, Tag = 'h2', firstElementClass }) => {
  const { title, showTitle, body, quote } = data;
  return (
    <>
      <Head
        title={title}
        Tag={Tag}
        showTitle={showTitle}
        className={[firstElementClass, 'mb-6 lg:mb-14'].join(' ')}
      />
      <ProjectContentBox reverse>
        {quote && <Quote quote={quote} className="mb-6 lg:mb-0" />}
        <ReactMarkdown className="prose left-container mr-auto">
          {body}
        </ReactMarkdown>
      </ProjectContentBox>
    </>
  );
};

export default SectionType1;

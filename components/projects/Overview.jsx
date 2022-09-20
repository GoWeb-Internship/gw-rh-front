import ReactMarkdown from 'react-markdown';
import Container from '../reusable/Container';

const Overview = ({ overviewData }) => {
  const { title, subTitle, textContent } = overviewData;

  return (
    <section>
      <Container>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <ReactMarkdown>{textContent}</ReactMarkdown>
      </Container>
    </section>
  );
};

export default Overview;

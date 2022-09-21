import Container from '../reusable/Container';
import ReactMarkdown from 'react-markdown';

const SectionType1 = ({ data }) => {
  const { title, showTitle, body, quote } = data;
  return (
    <section>
      <Container>
        <h2 className={!showTitle ? 'visually-hidden' : null}>{title}</h2>
        <div>
          <ReactMarkdown>{body}</ReactMarkdown>
          <p>{quote}</p>
        </div>
      </Container>
    </section>
  );
};

export default SectionType1;

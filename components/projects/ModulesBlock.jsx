import ReactMarkdown from 'react-markdown';
import Container from '../reusable/Container';

const ModulesBlock = ({ data }) => {
  const { module, page_module } = data;
  return (
    <section>
      <Container>
        <h2 className="visually-hidden">{page_module}</h2>
        {!!module.length && (
          <ul>
            {module.map(({ id, title, subTitle, text: body, videoID }) => (
              <li key={id}>
                <div>
                  <h2>{title}</h2>
                  <p>{subTitle}</p>
                  <ReactMarkdown>{body}</ReactMarkdown>
                </div>
                <div className="h-[50px] bg-slate-400 flex items-center">
                  {videoID}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default ModulesBlock;

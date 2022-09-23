import ReactMarkdown from 'react-markdown';
import Container from '../reusable/Container';
import Head from '../reusable/Head';
import YoutubeVideo from '../reusable/YoutubeVideo';

const ModulesBlock = ({ data }) => {
  const { module, page_module } = data;
  return (
    <section>
      <Container className="project-container">
        <h2 className="visually-hidden">{page_module}</h2>
        {!!module.length && (
          <ul>
            {module.map(({ id, title, subTitle, text: body, videoID }) => (
              <li
                key={id}
                className="last:mb-0 mb-8 md:mb-14 lg:mb-10 lg:flex lg:gap-x-4 lg:even:flex-row-reverse xl:gap-x-8"
              >
                <div className="lg:shrink-0 lg:w-[560px] xl:w-[794px]">
                  <Head
                    title={title}
                    Tag="h3"
                    className="text-brand1 lg:text-main mb-2"
                  />
                  <p className="text-brand1 font-semibold mb-6">{subTitle}</p>
                  <ReactMarkdown className="prose mb-6">{body}</ReactMarkdown>
                </div>
                <div className="bg-slate-400 flex items-center w-[280px] h-[158px] sm:w-full sm:h-[248px] md:h-[360px] lg:shrink-0 lg:w-[560px] lg:h-[315px] xl:w-[794px] xl:h-[446px]">
                  <YoutubeVideo data={{ videoID }} />
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

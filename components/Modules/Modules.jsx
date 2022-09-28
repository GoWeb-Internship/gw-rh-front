import ReactMarkdown from 'react-markdown';
import Head from '../reusable/Head';
import withShowMore, { useShowMore } from '../reusable/ShowMore';
import YoutubeVideo from '../reusable/YoutubeVideo';

const Modules = ({ modules }) => {
  const normalizedModules = useShowMore(modules);

  return (
    <ul>
      {normalizedModules.map(({ id, title, subTitle, text: body, videoID }) => (
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
  );
};

export default withShowMore(Modules);

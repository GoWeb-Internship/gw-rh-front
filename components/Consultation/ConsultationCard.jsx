import ReactMarkdown from 'react-markdown';
import YoutubeVideo from '../reusable/YoutubeVideo';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';
import useTranslations from '../../hooks/useTranslations';

const ConsultationCard = ({ data }) => {
  const button = useTranslations('signToConsultBtn');

  return (
    <>
      <div className="rounded overflow-hidden bg-slate-400 flex items-center w-[280px] h-[158px] sm:w-full sm:h-[248px] md:h-[360px] lg:shrink-0 lg:w-[560px] lg:h-[315px]">
        <YoutubeVideo data={data} />
      </div>
      <div>
        <Heading
          tag="h3"
          text={data.videoTitle}
          className="uppercase font-semibold text-lg tracking-[0.005em] mt-4 mb-2 md:tracking-normal md:text-t2444 md:mt-6 md:mb-4 lg:mt-0 lg:mb-6"
        />
        <ReactMarkdown className="prose mb-6 lg:mb-8">
          {data.videoBody}
        </ReactMarkdown>
        <Button
          linkTo={{
            pathname: '/contact-us',
            query: { clickFrom: `${button}` },
          }}
          text={button}
        />
      </div>
    </>
  );
};

export default ConsultationCard;

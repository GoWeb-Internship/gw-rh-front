import ReactMarkdown from 'react-markdown';
import YoutubeVideo from '../reusable/YoutubeVideo';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';
import useTranslations from '../../hooks/useTranslations';

const ConsultationCard = ({ data }) => {
  const button = useTranslations('signToConsultBtn');

  return (
    <>
      <div className="rounded overflow-hidden bg-slate-400 flex items-center w-[280px] h-[158px] sm:w-full sm:h-[248px] md:h-[360px] lg:shrink-0 lg:w-[560px] lg:h-[315px] xl:w-[794px] xl:h-[446px]">
        <YoutubeVideo data={data} />
      </div>
      <div>
        <Heading
          tag="h3"
          text={data.videoTitle}
          className="uppercase font-semibold text-t2444 mt-4 mb-2 md:mt-6 md:mb-4 lg:mt-0 lg:mb-6"
        />
        <ReactMarkdown className="prose mb-6 lg:mb-8">
          {data.videoBody}
        </ReactMarkdown>
        <Button linkTo="/contuct-us" text={button} />
      </div>
    </>
  );
};

export default ConsultationCard;

import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { enGB, ru, uk, cs } from 'date-fns/locale';

import Heading from '../reusable/Heading';
import YoutubeVideo from '../reusable/YoutubeVideo';

const localeConfig = {
  uk: uk,
  en: enGB,
  cs: cs,
  ru: ru,
};

const VideoCard = ({ video, videoWrapperClass }) => {
  const { locale } = useRouter();

  const dataPublished = format(new Date(`${video.published}`), 'MMM yyyy', {
    locale: localeConfig[locale],
  });

  return (
    <>
      <div className={videoWrapperClass}>
        <YoutubeVideo data={video} />
      </div>
      <Heading
        tag="h3"
        text={video.videoTitle}
        className="uppercase mt-2 text-base font-semibold md:text-lg md:tracking-[0.005em] md:mt-4 lg:mt-2"
      />
      <div className="flex mt-2 text-t1416 font-normal">
        <p>{video.location}</p>
        <p className="ml-4">{dataPublished}</p>
      </div>
    </>
  );
};
export default VideoCard;

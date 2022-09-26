import AboutTraveling from './AboutTravel';
import YoutubeVideo from '../reusable/YoutubeVideo';

const data = {
  videoId: 'tVW9j-iIJYs',
};

const WithVideo = () => {
  return (
    <div className="bg-[#F0F6FA] px-3 md:px-4 lg:px-24  pt-4  md:pt-10 lg:py-12 lg:flex lg:justify-evenly lg:gap-x-[14px] ">
      <AboutTraveling video />
      <YoutubeVideo data={data} />
    </div>
  );
};

export default WithVideo;

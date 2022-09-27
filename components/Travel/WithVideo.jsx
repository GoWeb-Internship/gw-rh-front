import AboutTraveling from './AboutTravel';
import YoutubeVideo from '../reusable/YoutubeVideo';

const WithVideo = ({ videoData }) => {
  return (
    <>
      {videoData &&
        videoData.map(({ id, videoId, date, eventTitle, aboutEvent }) => (
          <div
            key={id}
            className="bg-[#F0F6FA] lg:px-24 pt-4  md:pt-10 lg:py-12 lg:flex lg:justify-evenly lg:gap-x-[14px] "
          >
            <AboutTraveling
              date={date}
              video
              eventTitle={eventTitle}
              aboutEvent={aboutEvent}
            />
            <YoutubeVideo data={{ videoID: videoId }} />
          </div>
        ))}
    </>
  );
};

export default WithVideo;

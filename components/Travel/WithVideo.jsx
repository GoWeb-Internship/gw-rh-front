import AboutTraveling from './AboutTravel';
import YoutubeVideo from '../reusable/YoutubeVideo';
import withShowMore, { useShowMore } from '../reusable/ShowMore';

const WithVideo = ({ videoData }) => {
  const { normalizedListData } = useShowMore(videoData);

  return (
    <div>
      {normalizedListData &&
        normalizedListData.map(
          ({ id, videoId, date, eventTitle, aboutEvent }) => (
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
              <div className="md:w-[640px] md:h-[360px] lg:w-[560px] lg:h-[315px]">
                <YoutubeVideo data={{ videoID: videoId }} />
              </div>
            </div>
          ),
        )}
    </div>
  );
};

export default withShowMore(WithVideo);

import { useState } from 'react';

import AboutTraveling from './AboutTravel';
import YoutubeVideo from '../reusable/YoutubeVideo';
import ButtonShow from '../reusable/ButtonShow';

const WithVideo = ({ videoData }) => {
  const [itemsToShow, setItemsToShow] = useState(2);

  const showmore = () => {
    setItemsToShow(videoData.length);
  };

  const showless = () => {
    setItemsToShow(1);
  };

  return (
    <div>
      {videoData &&
        videoData
          .slice(0, itemsToShow)
          .map(({ id, videoId, date, eventTitle, aboutEvent }) => (
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
          ))}
      {itemsToShow === 1 ? (
        <ButtonShow onClick={showmore}>Показать больше</ButtonShow>
      ) : (
        <ButtonShow onClick={showless}>показать меньше</ButtonShow>
      )}
    </div>
  );
};

export default WithVideo;

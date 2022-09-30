import { useState, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';

import AboutTraveling from './AboutTravel';
import Slider from '../reusable/Slider';
import useMedia from '../../hooks/useMedia';
import withShowMore, { useShowMore } from '../reusable/ShowMore';

const WithImg = ({ sliderDate }) => {
  const [imageWidth, setImageWidth] = useState(280);
  const [imageHeight, setImageHeight] = useState(174);

  const { normalizedListData } = useShowMore(sliderDate);
  const media = useMedia();

  useEffect(() => {
    if (media === 'desktop') {
      setImageWidth('560');
      setImageHeight('315');
    } else if (media === 'tablet') {
      setImageWidth('310');
      setImageHeight('174');
    } else if (media === 'mobile') {
      setImageWidth('280');
      setImageHeight('174');
    } else {
      setImageWidth('560');
      setImageHeight('315');
    }
  }, [media]);

  return (
    <div>
      {normalizedListData &&
        normalizedListData.map(
          ({ id, date, eventTitle, aboutEvent, image: { data } }) => {
            return (
              <div
                className="pt-8 md:pt-16 lg:pt-14 md:flex md:justify-between md:gap-x-[14px] "
                key={id}
              >
                <Slider
                  slidesPerView={1}
                  innerButtons={true}
                  pageFormat="desktop"
                  className={
                    'md:w-[310px] lg:w-[560px] h-[174px] lg:h-[315px] mr-auto'
                  }
                  btnClass={'fill-white'}
                  id={id + 'img'}
                >
                  {data.map(({ attributes }, index) => {
                    const { alternativeText, url } = attributes;
                    return (
                      <SwiperSlide key={index}>
                        <NextImage
                          layout="fixed"
                          alt={alternativeText}
                          width={imageWidth}
                          height={imageHeight}
                          src={url}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Slider>
                <AboutTraveling
                  date={date}
                  eventTitle={eventTitle}
                  aboutEvent={aboutEvent}
                />
              </div>
            );
          },
        )}
    </div>
  );
};

export default withShowMore(WithImg);

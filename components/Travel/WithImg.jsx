import { SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';

import AboutTraveling from './AboutTravel';
import Slider from '../reusable/Slider';

const WithImg = ({ sliderDate }) => {
  return (
    <>
      {sliderDate &&
        sliderDate.map(
          ({ id, date, eventTitle, aboutEvent, image: { data } }) => {
            return (
              <div
                className=" py-8  md:py-16 lg:py-14 md:flex md:justify-between md:gap-x-[14px] "
                key={id}
              >
                <Slider
                  slidesPerView={1}
                  innerButtons={true}
                  pageFormat="desktop"
                  className={'md:w-[310px] lg:w-[560px] mr-auto'}
                  btnClass={'fill-white'}
                >
                  {data.map(({ id, attributes }) => {
                    const { alternativeText, url, width, height } = attributes;
                    return (
                      <SwiperSlide key={id}>
                        <NextImage
                          layout="responsive"
                          alt={alternativeText}
                          width={width || '100%'}
                          height={height || '100%'}
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
    </>
  );
};

export default WithImg;

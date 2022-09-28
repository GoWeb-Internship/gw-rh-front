import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import NextImage from 'next/image';

import AboutTraveling from './AboutTravel';
import Slider from '../reusable/Slider';
import ButtonShow from '../reusable/ButtonShow';
import useMedia from '../../hooks/useMedia';

const WithImg = ({ sliderDate }) => {
  const [itemsToShow, setItemsToShow] = useState(2);
  const media = useMedia();

  console.log(media);
  const showmore = () => {
    setItemsToShow(sliderDate.length);
  };

  const showless = () => {
    setItemsToShow(1);
  };

  return (
    <div>
      {sliderDate &&
        sliderDate
          .slice(0, itemsToShow)
          .map(({ id, date, eventTitle, aboutEvent, image: { data } }) => {
            return (
              <div
                className=" py-8  md:py-16 lg:py-14 md:flex md:justify-between md:gap-x-[14px] "
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
                >
                  {data.map(({ attributes }, index) => {
                    const { alternativeText, url } = attributes;
                    return (
                      <SwiperSlide key={index}>
                        <NextImage
                          layout="fixed"
                          alt={alternativeText}
                          width={560}
                          height={315}
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
          })}
      {itemsToShow === 1 ? (
        <ButtonShow onClick={showmore}>Показать больше</ButtonShow>
      ) : (
        <ButtonShow onClick={showless}>показать меньше</ButtonShow>
      )}
    </div>
  );
};

export default WithImg;

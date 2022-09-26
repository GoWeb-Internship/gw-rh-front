import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import AboutTraveling from './AboutTravel';
import Slider from '../reusable/Slider';

const images = [
  {
    id: 1,
    scr: 'https://images.unian.net/photos/2022_05/1652013870-1213.jpg?r=960969',
  },
  {
    id: 2,
    scr: 'https://images.unian.net/photos/2022_05/1652013870-1213.jpg?r=960969',
  },
  {
    id: 3,
    scr: 'https://images.unian.net/photos/2022_05/1652013870-1213.jpg?r=960969',
  },
  {
    id: 4,
    scr: 'https://images.unian.net/photos/2022_05/1652013870-1213.jpg?r=960969',
  },
];

const WithImg = () => {
  return (
    <div className=" py-8  md:py-16 lg:py-14 lg:flex lg:justify-between lg:flex-row-reverse lg:gap-x-[14px] ">
      <AboutTraveling />
      <Slider slidesPerView={1} innerButtons={true} pageFormat="desktop">
        {images.map(({ id, scr }) => (
          <SwiperSlide key={id}>
            <Image width={48} height={48} alt="props" src={scr} />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="w-[280px] h-[156px] bg-red-500 md:w-[640px] lg:h-[360px] lg:w-[560px] md:h-[315px]"></div>
    </div>
  );
};

export default WithImg;

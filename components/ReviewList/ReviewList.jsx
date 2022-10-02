import ReviewCard from './ReviewCard';
import Slider from '../reusable/Slider';

import { SwiperSlide } from 'swiper/react';
import useMedia from '../../hooks/useMedia';
import { useEffect, useState } from 'react';

const ReviewList = ({ listData }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [spaceBetween, setSpaceBetween] = useState(1);
  const pageFormat = useMedia();

  useEffect(() => {
    if (!pageFormat) return;
    pageFormat === 'mobile' ? setSlidesPerView(1) : setSlidesPerView(2);
    pageFormat === 'desktop' ? setSpaceBetween(112) : setSpaceBetween(40);
  }, [pageFormat]);

  return (
    <Slider
      slidesPerView={slidesPerView}
      className={'lg:w-[844px] xl:w-[1000px] mx-auto'}
      spaceBetween={spaceBetween}
      btnClass={'fill-brand3'}
      innerButtons={false}
      pageFormat={pageFormat}
    >
      {listData.map(({ id, ...itemData }) => (
        <SwiperSlide key={id} className="slide h-auto">
          <ReviewCard itemData={itemData} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default ReviewList;

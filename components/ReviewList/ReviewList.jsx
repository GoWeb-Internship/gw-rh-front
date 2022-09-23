import ReviewCard from './ReviewCard';
import Slider from '../reusable/Slider';

import { SwiperSlide } from 'swiper/react';
import useMedia from '../../hooks/useMedia';
import { getMediaQueries } from '../../helpers/mediaServices';
import { useEffect, useState } from 'react';

const mediaQueries = getMediaQueries();

const ReviewList = ({ listData }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [spaceBetween, setSpaceBetween] = useState(1);
  const pageFormat = useMedia(
    Object.values(mediaQueries),
    Object.keys(mediaQueries),
    null,
  );

  useEffect(() => {
    if (!pageFormat) return;
    pageFormat === 'mobile' ? setSlidesPerView(1) : setSlidesPerView(2);
    pageFormat === 'desktop' ? setSpaceBetween(112) : setSpaceBetween(40);
  }, [pageFormat]);

  return (
    <Slider
      slidesPerView={slidesPerView}
      className={'md:w-[500px] lg:w-[844px] mx-auto'}
      spaceBetween={spaceBetween}
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

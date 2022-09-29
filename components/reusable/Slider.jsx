import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from 'public/slider-arrow.svg';

const Slider = ({
  children,
  className,
  slidesPerView = 1,
  onSlideChange,
  onSwiper,
  style,
  spaceBetween = 40,
  btnClass = 'fill-main',
  innerButtons = false,
  pageFormat = 'mobile',
}) => {
  const modules =
    pageFormat === 'mobile' ? [Navigation, Pagination] : [Navigation];

  return (
    <div className={`${className} relative`}>
      <Swiper
        className=""
        spaceBetween={spaceBetween}
        modules={modules}
        pagination
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        style={style}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        loop={true}
      >
        {children}
      </Swiper>

      <>
        <div
          className={[
            `hidden prev-slider swiper-button-disabled md:block desk-nav-btn`,
            innerButtons ? 'inner' : 'outer',
          ].join(' ')}
          role={'button'}
        >
          <Arrow className={['rotate-180', btnClass].join(' ')} />
        </div>
        <div
          className={[
            `hidden next-slider swiper-button-disabled md:block desk-nav-btn`,
            innerButtons ? 'inner' : 'outer',
          ].join(' ')}
          role={'button'}
        >
          <Arrow className={[btnClass].join(' ')} />
        </div>
      </>
    </div>
  );
};

export default Slider;

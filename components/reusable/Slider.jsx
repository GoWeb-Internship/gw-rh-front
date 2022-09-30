import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from 'public/slider-arrow.svg';
import classNames from 'classnames';

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
  id = '',
}) => {
  const modules =
    pageFormat === 'mobile' ? [Navigation, Pagination] : [Navigation];

  const arrowFormat = classNames(
    { 'block inner': innerButtons },
    { 'hidden outer': !innerButtons },
  );

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
          nextEl: `.next-slider-navigation-${id}`,
          prevEl: `.prev-slider-navigation-${id}`,
        }}
        loop={true}
      >
        {children}
      </Swiper>

      <>
        <div
          className={[
            ` prev-slider swiper-button-disabled md:block desk-nav-btn`,
            `prev-slider-navigation-${id}`,
            arrowFormat,
          ].join(' ')}
          role={'button'}
        >
          <Arrow className={['rotate-180', btnClass].join(' ')} />
        </div>
        <div
          className={[
            ` next-slider swiper-button-disabled md:block desk-nav-btn`,
            `next-slider-navigation-${id}`,
            arrowFormat,
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

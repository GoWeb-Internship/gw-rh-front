import React, { useState } from 'react';
import VideoCard from './VideoCard';
import ButtonShow from '../reusable/ButtonShow';
import useMedia from '../../hooks/useMedia';
import useTranslations from '../../hooks/useTranslations';

const VideoList = ({ listData, className = '' }) => {
  const [itemsToShow, setItemsToShow] = useState(2);

  const btnShow = useTranslations(['readLess', 'readMore']);

  const pageFormat = useMedia();
  const isMobile = pageFormat === 'mobile';

  const showmore = () => {
    setItemsToShow(listData.length);
  };

  const showless = () => {
    setItemsToShow(2);
  };

  return (
    <>
      <ul
        className={[
          'hidden md:grid md:gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4',
          className,
        ].join(' ')}
      >
        {listData.map(item => (
          <li
            key={item.id}
            className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
          >
            <VideoCard
              video={item}
              videoWrapperClass={
                'h-[158px] sm:h-[225px] md:h-[174px] lg:h-[153px] xl:h-[220px]'
              }
            />
          </li>
        ))}
      </ul>
      {/* Начало Кнопка показать больше/ меньше для моб версии */}
      {pageFormat && isMobile && (
        <ul
          className={['grid gap-y-6 md:hidden lg:hidden', className].join(' ')}
        >
          {listData.slice(0, itemsToShow).map((item, index) => (
            <li
              key={index}
              className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
            >
              <VideoCard
                video={item}
                videoWrapperClass={
                  'h-[158px] sm:h-[225px] md:h-[174px] lg:h-[153px] xl:h-[220px]'
                }
              />
            </li>
          ))}
          {itemsToShow === 2 ? (
            <ButtonShow onClick={showmore}>{btnShow.readMore}</ButtonShow>
          ) : (
            <ButtonShow onClick={showless}>{btnShow.readLess}</ButtonShow>
          )}
        </ul>
      )}
      {/* Конец */}
    </>
  );
};

export default VideoList;

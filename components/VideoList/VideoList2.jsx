import React from 'react';
import withShowMore, { useShowMore } from '../reusable/ShowMore';
import VideoCard from './VideoCard';

const VideoList = ({ listData, className = '' }) => {
  const { normalizedListData } = useShowMore(listData);

  return (
    <>
      <ul
        className={[
          'grid gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4',
          className,
        ].join(' ')}
      >
        {normalizedListData.map(item => (
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
      {/* Конец */}
    </>
  );
};

// ['readLess', 'readMore']

export default withShowMore(VideoList);

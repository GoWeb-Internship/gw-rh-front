import VideoCard from './VideoCard';

const VideoList = ({ listData }) => {
  return (
    <ul
      className={
        'grid gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4'
      }
    >
      {listData.map(item => (
        <li
          key={item.id}
          className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full md:"
        >
          <VideoCard
            video={item}
            videoWrapperClass={
              'h-[158px] sm:h-[225px] md:h-[174px] lg:h-[153px] xl:h-[220px]'
            }
          />
        </li>
      ))}
      {/* {listData.map(({ id, videoID, videoTitle, location, published }) => (
        <li key={id}>
          <div className="h-12 flex items-center bg-slate-400">{videoID}</div>
          <h3>{videoTitle}</h3>
          <div>
            <p>{location}</p>
            <p>{published}</p>
          </div>
        </li>
      ))} */}
    </ul>
  );
};

export default VideoList;

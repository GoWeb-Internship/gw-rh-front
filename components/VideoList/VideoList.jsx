import VideoCard from './VideoCard';

const VideoList = ({ listData, className }) => {
  return (
    <ul className={className}>
      {listData.map(item => (
        <li
          key={item.id}
          className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
        >
          <VideoCard video={item} />
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

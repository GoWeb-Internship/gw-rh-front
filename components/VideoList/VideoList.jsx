const VideoList = ({ listData }) => {
  return (
    <ul>
      {listData.map(({ id, videoID, videoTitle, location, published }) => (
        <li key={id}>
          <div className="h-12 flex items-center bg-slate-400">{videoID}</div>
          <h3>{videoTitle}</h3>
          <div>
            <p>{location}</p>
            <p>{published}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;

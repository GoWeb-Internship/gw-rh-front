import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

import ArrowYoutube from 'public/arrowYoutube.svg';
import useObserver from '../../hooks/useObserver';

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const YoutubeVideo = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const container = useRef();
  const videoPlayer = useRef(null);

  const [showVideo, getRef] = useObserver();

  useEffect(() => {
    if (!container.current || !getRef) return;
    getRef(container);
  }, [getRef]);

  const handleYoutubeReady = e => {
    videoPlayer.current = e.target;
    setDisabled(false);
  };

  const handleOnPlay = () => {
    setIsPlaying(true);
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      videoPlayer.current?.pauseVideo();
    } else {
      videoPlayer.current?.playVideo();
    }
  };

  const playBtn =
    ' max-w-[80px] max-h-[80px] w-full h-full border-none rounded-[50%] bg-light bg-no-repeat bg-[60% center] bg-[length:34px] block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10';

  const hidePlayBtn = 'opacity-0';

  return (
    <>
      <div
        ref={container}
        className="relative rounded overflow-hidden w-full h-full"
      >
        {!showVideo ? (
          <div className="bg-slate-300 w-full h-full"></div>
        ) : (
          <>
            <YouTube
              videoId={data.videoID}
              opts={opts}
              onReady={handleYoutubeReady}
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              className="relative rounded w-full h-full overflow-hidden"
            />

            <button
              type="button"
              onClick={handleClick}
              className={`${isPlaying ? playBtn && hidePlayBtn : playBtn}`}
              disabled={disabled}
            >
              <ArrowYoutube className="absolute top-[22%] left-[34%] " />
            </button>
          </>
        )}
      </div>
    </>
  );
};

YoutubeVideo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default YoutubeVideo;

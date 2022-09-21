import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import { format } from 'date-fns';
import { en, ru, uk, cs } from 'date-fns/locale';

import Heading from './Heading';
import ArrowYoutube from 'public/arrowYoutube.svg';

const localeConfig = {
  uk: uk,
  en: en,
  cs: cs,
  ru: ru,
};

const Video = ({ video }) => {
  // console.log('video', video);

  const { locale } = useRouter();

  const data = format(new Date(`${video.data}`), 'MMM yyyy', {
    locale: localeConfig[locale],
  });

  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const container = useRef();
  const videoPlayer = useRef(null);
  const observer = useRef();

  const onVideoIntersection = entries => {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onVideoIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25,
    });
  }, []);

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (container && container.current) {
        observer.current.observe(container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [container]);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleYoutubeReady = e => {
    videoPlayer.current = e.target;
  };

  const handleOnPlay = () => {
    setIsPlaying(true);
  };

  const handleOnPause = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (isPlaying) {
      videoPlayer.current.pauseVideo();
    } else {
      videoPlayer.current.playVideo();
    }
  };

  const playBtn =
    ' max-w-[80px] max-h-[80px] w-full h-full border-none rounded-[50%] bg-light bg-no-repeat bg-[60% center] bg-[length:34px] block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10';

  const hidePlayBtn = 'opacity-0';

  return (
    <>
      <div className="relative rounded">
        {showVideo ? (
          <div className="bg-slate-300 w-full h-full">
            <h1>Hi</h1>
          </div>
        ) : (
          <>
            <YouTube
              videoId={video.idVideo}
              opts={opts}
              onReady={handleYoutubeReady}
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              className="relative rounded"
            />
            <button
              type="button"
              onClick={handleClick}
              className={`${isPlaying ? playBtn && hidePlayBtn : playBtn}`}
            >
              <ArrowYoutube className="absolute top-[22%] left-[34%] " />
            </button>
          </>
        )}
      </div>

      <Heading tag="h3" text={video.title} />
      <div className="flex">
        <p>{video.location}</p>
        <p className="ml-4">{data}</p>
      </div>
    </>
  );
};
export default Video;

import { useEffect, useState } from 'react';

const durationConfig = {
  fast: {
    duration: 100,
    tailCLass: 'duration-100',
  },
  medium: {
    duration: 200,
    tailCLass: 'duration-200',
  },
  slow: {
    duration: 500,
    tailCLass: 'duration-500',
  },
};

const useShowElement = (durationType = 'middle') => {
  const [showElement, setShowElement] = useState(false);
  const [renderElement, setRenderElement] = useState(false);

  const onOpen = () => {
    setRenderElement(true);
    setTimeout(() => {
      setShowElement(true);
    }, 0);
  };

  const onClose = () => {
    setShowElement(false);
    setTimeout(() => {
      setRenderElement(false);
    }, durationConfig[durationType]?.duration ?? durationConfig.medium.duration);
  };

  const onToggle = () => (!renderElement ? onOpen() : onClose());

  const classes = [
    'transition-opacity',
    durationConfig[durationType]?.tailCLass ?? durationConfig.medium.tailCLass,
    showElement
      ? 'opacity-100 pointer-events-auto'
      : 'opacity-0 pointer-events-none',
  ].join(' ');

  useEffect(() => {
    return () => {};
  }, []);

  return [renderElement, showElement, classes, onToggle];
};

export default useShowElement;

import { useEffect, useState } from 'react';

const useShowElement = (duration = 200) => {
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
    }, duration);
  };

  const onToggle = () => (!renderElement ? onOpen() : onClose());

  const classes = showElement
    ? `opacity-100 pointer-events-auto duration-[${duration}ms] transition-opacity`
    : `opacity-0 pointer-events-none duration-[${duration}ms] transition-opacity`;

  useEffect(() => {
    return () => {};
  }, []);

  return [renderElement, showElement, classes, onToggle];
};

export default useShowElement;

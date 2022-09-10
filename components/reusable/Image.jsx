import React, { useState } from 'react';
import NextImage from 'next/image';

const Image = ({ src, ...props }) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <NextImage
      objectFit="cover"
      src={src}
      {...props}
      onLoadingComplete={onLoadCallback}
      layout="responsive"
    />
  );
};

export default Image;

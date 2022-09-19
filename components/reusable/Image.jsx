import NextImage from 'next/image';

const Image = ({ image, className, style, alt }) => {
  // console.log('image', image);
  const { url, width, height } = image.data.attributes;
  return (
    <NextImage
      layout="responsive"
      width={width || '100%'}
      height={height || '100%'}
      objectFit="contain"
      src={url}
      alt={alt || ''}
      className={className}
    />
  );
};

export default Image;

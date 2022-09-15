import { getStrapiMedia } from '../../helpers/apiServices';
import NextImage from 'next/image';

const Image = ({ image, className, style, alt, dev = false }) => {
  // console.log('image', image);
  const { url, width, height } = image.data.attributes;
  return (
    <NextImage
      layout="responsive"
      width={width || '100%'}
      height={height || '100%'}
      objectFit="contain"
      src={getStrapiMedia(image, dev)}
      alt={alt || ''}
      className={className}
    />
  );
};

export default Image;

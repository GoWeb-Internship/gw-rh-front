import { getStrapiMedia } from '../../helpers/apiServices';
import NextImage from 'next/image';

const Image = ({ image, className, style }) => {
  // console.log('image', image);
  const { url, alternativeText, width, height } = image.data.attributes;
  return (
    <NextImage
      layout="responsive"
      width={width || '100%'}
      height={height || '100%'}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ''}
      className={className}
    />
  );
};

export default Image;

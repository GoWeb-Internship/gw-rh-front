import NextImage from 'next/image';
import PropTypes from 'prop-types';

const Image = ({ image, className, alt }) => {
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

Image.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;

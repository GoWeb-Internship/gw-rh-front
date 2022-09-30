import PropTypes from 'prop-types';

const Heading = ({ tag, text, className }) => {
  const Tag = tag || 'h1';
  return <Tag className={className}>{text}</Tag>;
};

Heading.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;

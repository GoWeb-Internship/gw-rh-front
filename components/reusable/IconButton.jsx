import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconButton = ({
  IconComponent,
  text = '',
  reverse,
  className,
  onClick,
  light,
  ...props
}) => {
  const classes = classnames({
    'flex-row-reverse': reverse,
    'text-light': light,
  });
  return (
    <button
      type="button"
      className={`flex items-center gap-x-3 py-4 font-navigation ${classes} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text && <span>{text}</span>}
      {IconComponent && (
        <IconComponent
          className={classnames(
            { 'stroke-light': light },
            { 'stroke-main': !light },
          )}
        />
      )}
    </button>
  );
};

IconButton.propTypes = {
  IconComponent: PropTypes.func.isRequired,
};

export default IconButton;

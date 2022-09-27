import Link from 'next/link';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  linkTo,
  text,
  buttonTheme = 'primary',
  className = '',
  ...props
}) => {
  return (
    <Link href={linkTo} {...props}>
      <a
        className={classnames([
          'btn',
          {
            btnPrimary: buttonTheme === 'primary',
            btnSecondary: buttonTheme === 'secondary',
            type3: buttonTheme === 'type3',
            type4: buttonTheme === 'type4',
          },
          className,
        ])}
      >
        {text}
      </a>
    </Link>
  );
};

Button.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonTheme: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

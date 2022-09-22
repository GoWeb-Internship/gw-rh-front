import classnames from 'classnames';
import { btn, btnPrimary, btnSecondary } from 'styles/Button.module.scss';

const Button = ({
  text,
  buttonTheme = 'primary',
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={classnames([
        btn,
        buttonTheme === 'primary' ? btnPrimary : btnSecondary,
        className,
      ])}
    >
      {text}
    </button>
  );
};

export default Button;

import classnames from "classnames";
import { btn, btnPrimery, btnSecondary } from "styles/Button.module.scss";

const Button = ({ text, buttonTheme = "primery", className = '' }) => {
  return (
    <button
        className={classnames([btn, buttonTheme === "primery"? btnPrimery : btnSecondary, className])}
        type="button"
    >
      {text}
    </button>
  );
};

export default Button;
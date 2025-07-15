import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({ text, icon }) {
  return (
    <div className={cx("btn")}>
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </div>
  );
}

export default Button;

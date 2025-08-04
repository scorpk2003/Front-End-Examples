import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({ text, icon }) {
  return (
    <button className={cx("btn")}>
      <span>{text}</span>
      {icon && <span className={cx("icon")}>{icon}</span>}
    </button>
  );
}

export default Button;

import styles from "./Infomation.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Infomation() {
  return (
    <div className={cx("wrapper")}>
      <div>info01</div>
      <div>info02</div>
    </div>
  );
}

export default Infomation;

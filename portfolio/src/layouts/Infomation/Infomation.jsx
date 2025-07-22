import styles from "./Infomation.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Infomation() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <img src="../src/assets/avatar.jpeg" className={cx("avatar")}></img>
        <div>info01</div>
      </div>
      <div className={cx("knowledge")}>info02</div>
    </div>
  );
}

export default Infomation;

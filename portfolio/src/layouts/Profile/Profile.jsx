import styles from "./Profile.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        <img src="../src/assets/main-avt.jpeg" className={cx("avatar")}></img>
        <div className={cx("separate-content")}></div>
        <div>info01</div>
      </div>
      <div className={cx("knowledge")}>info02</div>
    </div>
  );
}

export default Profile;

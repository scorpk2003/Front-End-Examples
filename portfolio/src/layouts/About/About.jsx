import styles from "./About.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function About() {
  return <div className={cx("item", "bg-white my-5")}>abc</div>;
}

export default About;

import styles from "./Header.module.css";
import Button from "../../components/Button";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function App() {
  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cx("icon")}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
  return (
    <div className={cx("heading")}>
      <div className={cx("logo-wrapper")}>
        {/* <img src="./src/assets/logo.jpeg" className={cx("logo")}></img> */}
        <div className={cx("logo")}>Portfolio.</div>
      </div>
      <Button text="Contact" icon={icon}></Button>
    </div>
  );
}

export default App;

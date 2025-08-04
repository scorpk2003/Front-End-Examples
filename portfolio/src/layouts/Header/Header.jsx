import styles from "./Header.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header({ Redirect = null }) {
  const navItems = ["About", "Profile", "Khang", "Project", "Contact"];

  const [selectIndex, setSelectIndex] = useState(Redirect);
  const [deselectIndex, setDeselectIndex] = useState(null);

  const handleClick = (index) => {
    if (index === selectIndex) return;
    setDeselectIndex(selectIndex);
    setSelectIndex(index);
  };

  return (
    <div className={cx("scroll")}>
      <ul className={cx("nav")}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={cx("item", {
              "hov-item": index !== 2,
            })}
            onClick={() => handleClick(index)}
          >
            {index === 2 ? (
              <img
                src="../src/assets/male-avt.jpeg"
                alt={item}
                className={cx("sig")}
              ></img>
            ) : (
              <span
                className={cx({
                  selected: selectIndex === index,
                  deselect: deselectIndex === index,
                })}
              >
                {item}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;

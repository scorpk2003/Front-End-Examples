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
    <div className="sticky top-13">
      <ul className="leading-13 mb-15 flex flex-row items-center justify-around bg-child-background rounded-full">
        {navItems.map((item, index) => (
          <li
            key={index}
            // className={cx("item", {
            //   "hov-item": index !== 2,
            // })}
            className={`px-6 m-1 basis-1/9 flex items-center justify-center cursor-pointer relative
              ${
                index !== 2
                  ? "after:absolute after:left-1/2 after:bottom-1/12 after:bg-text after:w-0 after:h-0.5 after:duration-500 hover:after:w-full hover:ease-in hover:transition-all hover:after:left-0 hover:text-text-hover"
                  : ""
              }

                `}
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
                // className={cx({
                //   selected: selectIndex === index,
                //   deselect: deselectIndex === index,
                // })}
                className={`${selectIndex === index ? "selected" : ""} ${
                  deselectIndex === index ? "deselect" : ""
                }
                `}
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

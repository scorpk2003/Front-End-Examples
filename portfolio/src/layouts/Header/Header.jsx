/* @tailwind */
import { useState } from "react";

function Header() {
  const navItems = ["About", "Profile", "Khang", "Project", "Contact"];

  const [selectIndex, setSelectIndex] = useState(null);
  const [deselectIndex, setDeselectIndex] = useState(null);

  const handleClick = (index) => {
    if (index === selectIndex) return;
    setDeselectIndex(selectIndex);
    setSelectIndex(index);
  };

  return (
    <div className="sticky z-50 top-13">
      <ul className="header__nav">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex-center m-1 basis-1/9 px-6"
            onClick={() => handleClick(index)}
          >
            {index === 2 ? (
              <img
                src="../src/assets/male-avt.jpeg"
                alt={item}
                className="fixed top-0 object-cover mt-4 overflow-hidden text-xl -translate-x-1/2 border-0 rounded-full left-1/2 size-20 ring-8 ring-heading"
              ></img>
            ) : (
              <span
                className={`nav__item--hov cursor-pointer relative
                  ${selectIndex === index ? "nav__item--selected" : ""}
                  ${deselectIndex === index ? "nav__item--deselect" : ""}`}
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

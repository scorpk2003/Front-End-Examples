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
    <div className="sticky top-13">
      <ul className="header-nav">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`header-nav-item
              ${index !== 2 ? "nav-item-hov" : ""}
                `}
            onClick={() => handleClick(index)}
          >
            {index === 2 ? (
              <img
                src="../src/assets/male-avt.jpeg"
                alt={item}
                className="rounded-full text-xl mt-4 fixed left-1/2 -translate-x-1/2 top-0 border-0 size-20 object-cover overflow-hidden"
              ></img>
            ) : (
              <span
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

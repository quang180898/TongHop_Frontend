import React from "react";

const MenuItems = ({ data }) => {

  return (
    data.length > 0 &&
    data.map((items, index) => {
      return (
        <li
          className="horizontal-list__item"
          key={index}
          onMouseEnter={() => onMouseOpen(index)}
        >
          <a href="/#" className="item-link">
            {items.title}
            <span className="line-bottom">{items.title}</span>
          </a>
        </li>
      );
    })
  );
};

export default MenuItems;

import React from "react";

const MenuItems = ({ data }) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    if (data?.length > 0) {
      setState(data);
    }
  }, [data]);

  const onMouseOpen = (index) => {
    const newData = [].concat(state);
    for (let i = 0; i < newData.length; i++) {
      if (i == index) {
        newData[i].isOpen = true;
      } else {
        newData[i].isOpen = false;
      }
    }
    setState(newData);
  };

  const MegaMenu = ({ submenus, isOpen }) => {
    return (
      <div className={`mega-menu ${isOpen ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <div key={index} className="mega-menu__inner">
            <div className="row">
              <div className="col-sm-2">hehe</div>
              <div className="col-sm-10">
                <a href="/#">{submenu.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    state.length > 0 &&
    state.map((items, index) => {
      return (
        <li
          className={`horizontal-list__item ${
            items.isOpen ? "is-expanded" : ""
          }`}
          key={index}
          onMouseEnter={() => onMouseOpen(index)}
        >
          <a href="/#" className="item-link">
            {items.title}
            <span className="line-bottom">{items.title}</span>
          </a>
          {items?.submenu?.length > 0 && (
            <MegaMenu submenus={items.submenu} isOpen={items.isOpen} />
          )}
        </li>
      );
    })
  );
};

export default MenuItems;

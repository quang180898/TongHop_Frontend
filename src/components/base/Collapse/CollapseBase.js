import React from "react";
import { Collapse } from "antd";

const CollapseBase = ({ children, iconPosition}) => {
  const callback = (key) => {
  };

  return (
    <Collapse
      className="collapse-base"
      defaultActiveKey={["1"]}
      expandIconPosition={iconPosition}
      onChange={callback}
    >
      {children}
    </Collapse>
  );
};

export default CollapseBase;

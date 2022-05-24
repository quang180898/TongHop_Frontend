import React from "react";
import { Collapse } from "antd";
import { getValueAndSetDefault } from "functions/Utils";

const { Panel } = Collapse;

const CollapseBase = ({
    children,
    className,
    iconPosition,
    forceRender,
    ghost,
    showArrow,
    activeKey,
    defaultActiveKey = 0,
}) => {
    const callback = (key) => {};

    return (
        <Collapse
            className={`collapse-base ${getValueAndSetDefault(className, "")}`}
            defaultActiveKey={defaultActiveKey}
            expandIconPosition={iconPosition}
            ghost={ghost}
            onChange={callback}
            onClick={()=> console.log("haha")}
            {...activeKey}
        >
            {children.map((child, index) => {
                const { header } = child.props;
                return (
                    <Panel
                        forceRender={forceRender}
                        showArrow={showArrow}
                        header={header}
                        key={index}
                    >
                        {child.props.children}
                    </Panel>
                );
            })}
        </Collapse>
    );
};

export default CollapseBase;

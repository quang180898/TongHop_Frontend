import React, { useState } from 'react';
import { Tabs } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';

const { TabPane } = Tabs;

const TabBase = (props) => {

    const { className, children, tabBarExtraContent, onChange, isTabNoBg = false, defaultActiveKey = 0, activeKey, forceRender = false, uppercaseLabelTab } = props
    function callback(key) {
        // console.log({ key })
    }
    return (
        <div className={`tab-base ${getValueAndSetDefault(className, '')}`}>
            <Tabs activeKey={activeKey} tabBarExtraContent={tabBarExtraContent} defaultActiveKey={defaultActiveKey} onChange={onChange} className={`${uppercaseLabelTab ? "label-tab-uppercase" : ""}`}>
                {children.map((child, index) => {
                    const { label } = child.props;
                    return (
                        <TabPane forceRender={forceRender} tab={label} key={index} >
                            {child.props.children}
                        </TabPane>
                    );
                })}
            </Tabs>
        </div>
    )
}


export default TabBase;

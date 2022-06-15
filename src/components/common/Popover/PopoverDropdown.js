import React, { useState, useEffect } from 'react';
import { Popover as PopoverAntd } from 'antd'
import { getValueAndSetDefault } from 'functions/Utils';

const PopoverDropdown = (props) => {
    const { children, content, title, trigger, placement, overlayClassName, ...attr } = props;
    const [visible, setVisible] = useState(false);

    const menu = (data) => {
        return data.map((item, index) => {
            return (
                <p onClick={hide} key={index}>
                    {item}
                </p>
            )
        })
    }

    const hide = () => {
        setVisible(false)
    }
    const handleVisibleChange = visible => {
        setVisible(visible);
    };
    return (
        <div className='popover_dropdown'>
            <PopoverAntd
                content={menu(content)}
                title={title}
                trigger={trigger ? trigger : "click"}
                visible={visible}
                onVisibleChange={handleVisibleChange}
                placement={placement ? placement : 'bottom'}
                getPopupContainer={(trigger) => trigger.parentNode}
                overlayClassName={getValueAndSetDefault(overlayClassName, 'rc_menu_popover_dropdown')}
                {...attr}
            >
                {children}
            </PopoverAntd>
        </div>
    )
}

export default PopoverDropdown
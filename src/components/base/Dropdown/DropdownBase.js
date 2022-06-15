import React from 'react';
import { Menu, Dropdown as DropdownAntd } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const DropdownBase = (props) => {
    const { classNameWarp, className, overlayClassName, options, placement, children, onChangeMenu, } = props;
    const menu = (
        <Menu>
            {options.map((item, index) => {
                return (
                    <Menu.Item key={index} onClick={() => onChangeMenu(item.value)}>
                        {item.label}
                    </Menu.Item>
                )
            })}
        </Menu>
    )
    return (
        <div className={"dropdown-base " + classNameWarp}>
            <DropdownAntd
                className={getValueAndSetDefault(className, '')}
                overlayClassName={`dropdown-base-overlay ${getValueAndSetDefault(overlayClassName, '')}`}
                overlay={menu}
                placement={placement}
                trigger={['click']}
            >
                {children}
            </DropdownAntd>
        </div>
    )
}
export default DropdownBase;
import React from 'react';
import { Menu, Dropdown as DropdownAntd } from 'antd';
import { getValueAndSetDefault } from '../../../functions/Utils.js';

const DropdownTable = (props) => {
    const { className, overlayClassName, options, placement, children, onChangeMenu } = props;
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
        <DropdownAntd
            className={`scb-dropdown ${getValueAndSetDefault(className, '')}`}
            overlayClassName={`scb-dropdown-overlay ${getValueAndSetDefault(overlayClassName, '')}`}
            overlay={menu}
            placement={placement}
            trigger={['click']}
        >
            {props.children}
        </DropdownAntd>

    )
}
export default DropdownTable;
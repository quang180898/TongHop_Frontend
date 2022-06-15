import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React from 'react';

const DropdownIcon = ({options, onChangeMenu}) => {
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
        <Dropdown 
          className="dropdown-icon" 
          overlay={menu}
          trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <DownOutlined />
          </a>
        </Dropdown>
      )
}

export default DropdownIcon;
    
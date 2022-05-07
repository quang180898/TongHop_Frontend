import React from "react";
import { Checkbox } from 'antd';

const CheckboxBase = ({options, onChange}) => {
    return (
        <Checkbox.Group className="checkbox-base" options={options} onChange={onChange} />
    )
}

export default CheckboxBase;
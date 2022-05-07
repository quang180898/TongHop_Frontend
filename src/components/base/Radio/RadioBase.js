import React from "react";
import { Radio } from 'antd';

const RadioBase = ({options, onChange, value}) => {

    return (
        <Radio.Group className="radio-base" options={options} onChange={onChange} value={value}/>
    )
}

export default RadioBase;
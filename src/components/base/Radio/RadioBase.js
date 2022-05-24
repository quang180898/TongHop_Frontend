import React from "react";
import { Radio } from 'antd';
import { getValueAndSetDefault } from "functions/Utils";

const RadioBase = ({className, options, onChange, value}) => {

    return (
        <Radio.Group className={`radio-base ${getValueAndSetDefault(className, "")}`} options={options} onChange={onChange} value={value}/>
    )
}

export default RadioBase;
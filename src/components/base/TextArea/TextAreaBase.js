import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';

const { TextArea } = Input;
const TextAreaBase = (props) => {
    const { value, onChange, name, textAreaClassName, placeholder, rows, disabled } = props

    return (
        <div className='texarea-base'>
            <TextArea
                className={getValueAndSetDefault(textAreaClassName, '')}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                disabled={disabled}
            />
        </div>
    )
}
export default TextAreaBase;
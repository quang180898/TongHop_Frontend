import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';

const InputIconLeft = (props) => {
    const { className, name, placeholder, onChange, onBlur, form, prefix } = props
    return (
        <Input
            placeholder={placeholder}
            className={`input-username ${getValueAndSetDefault(className, '')}`}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={form && form.getFieldValue(name)}
            prefix={prefix}
        />
    )
}
export default InputIconLeft;
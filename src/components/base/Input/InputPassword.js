import React, { useState } from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';

const InputPassword = (props) => {
    const { className, dependencies, rules, name, placeholder, onChange, onBlur, form, maxLength, minLength } = props
    const [isShow, setShowText] = useState()
    return (
        <Input.Password
            placeholder={placeholder}
            className={`input-password ${getValueAndSetDefault(className, '')}`}
            type={isShow ? "text" : "password"}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            value={form && form.getFieldValue(name)}
            prefix={<i className="icon las la-lock"></i>}
        />
    )
}
export default InputPassword;
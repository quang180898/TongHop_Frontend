import React from 'react';
import { Input } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';
import PropTypes from 'prop-types';

const InputBase = (props) => {

    const { className, value, defaultValue, onChange, icon, disabled, readOnly,
        placeholder, hasCheckValid, validValue, name, onPressEnter, onBlur, type, classNameWrap, maxLength } = props
    return (
        <div className={`input-base ${getValueAndSetDefault(classNameWrap, '')}${hasCheckValid ? ' check-valid' : ''}${validValue ? ' active' : ''}  `}
        >
            <Input
                name={name}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange ? onChange : undefined}
                disabled={disabled ? true : false}
                maxLength={maxLength}
                suffix={icon}
                readOnly={readOnly}
                addonAfter={props.children}
                defaultValue={defaultValue}
                onBlur={onBlur}
                onPressEnter={onPressEnter}
                type={type}
            />
        </div>
    )
}

InputBase.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: PropTypes.bool,
    classNameWrap: PropTypes.string,
    inputType: PropTypes.string,
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    onBlur: PropTypes.func
}

export default InputBase;
import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import PropTypes from 'prop-types';
import { getValueAndSetDefault } from 'functions/Utils';

const ButtonBase = (props) => {

    const { className, label, onClick, iconClassname, url, htmlType, style, disabled, loading, debounce = true } = props

    let timeOut
    const onDisablebClick = (value) => {
        if (onClick) {
            if (debounce) {
                if (timeOut) {
                    clearTimeout(timeOut)
                }
                timeOut = setTimeout(() => {
                    onClick(value)
                }, 100);
            }
            else {
                onClick(value)
            }
        }
    }

    return (
            <Button
                loading={loading}
                className={`btn ${getValueAndSetDefault(className, '')}`}
                onClick={onDisablebClick}
                disabled={disabled}
                style={style}
                htmlType={getValueAndSetDefault(htmlType, '')}
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {label}
            </Button>
    )
}
ButtonBase.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
    isButton: PropTypes.bool,
    iconClassname: PropTypes.string,
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    htmlType: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    debounce: PropTypes.bool
}

export default ButtonBase;
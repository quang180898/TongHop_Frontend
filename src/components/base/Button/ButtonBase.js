import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import PropTypes from 'prop-types';
import { getValueAndSetDefault } from 'functions/Utils';

const ButtonBase = (props) => {

    //className button :   btn-white, btn-red, btn-blue, btn-red-outline, btn-white-outline,
    //                     btn-blue-outline, btn-red-bd-none, btn-light-blue, btn-purple
    const { className, label, onClick, isButton = true, iconClassname, url, htmlType, style, disabled, loading, debounce = true } = props

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
        isButton    //check có phải là loại nút (isButton = true (mặc định)) hay link (isButton = true) )
            ?
            <Button
                loading={loading}
                className={`btn ${getValueAndSetDefault(className, '')}`}
                onClick={onDisablebClick}
                disabled={disabled}
                style={style}
                htmlType={getValueAndSetDefault(htmlType, '')}
            //classname icon exp: fas fa-folder-open
            >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                {label}
            </Button>
            :
            <Link className={`btn  ${getValueAndSetDefault(className, '')}`} to={getValueAndSetDefault(url, '/')} style={style} >
                {iconClassname && <i className={`btn-icon ${getValueAndSetDefault(iconClassname, '')}`} />}
                <span className="btn-link">
                    {label}
                </span>

            </Link>
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
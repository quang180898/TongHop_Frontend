import React from 'react';
import { Select } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';
import PropTypes from 'prop-types';


const SelectBase = (props) => {

    const {
        loading, open, name,
        value, defaultValue, dropdownClassName,
        style, datas, placeholder = 'choose',
        onChange, isClear, disabled, className,
        classNameWrap, showSearch = true, showArrow = true
    } = props;

    const { Option } = Select;

    const [state, setState] = React.useState({
        value: null
    })

    React.useEffect(() => {
        let params = datas?.length > 0 && datas.find(e => e.value == value)
        params
            ? setState(e => ({ ...e, value: parseInt(value) }))
            : setState(e => ({ ...e, value: null }))
    }, [value, datas])

    return (
        <div className={`action select-base ${getValueAndSetDefault(classNameWrap, '')}`}>
            <Select
                loading={loading}
                open={open}
                showSearch={showSearch}
                defaultValue={defaultValue}
                style={style}
                onChange={onChange}
                disabled={disabled || loading == true}
                showArrow={showArrow}
                className={getValueAndSetDefault(className, "")}
                dropdownClassName={getValueAndSetDefault(dropdownClassName, '')}
                value={isClear ? null : state.value}
                placeholder={placeholder}
                children={datas?.length > 0 && datas.map((e, key) => {
                    return <Option name={name} key={key} value={parseInt(e.value)}>{e.label}</Option>;
                })}
                filterOption={(input, option) => {
                    if (option.children.props) {
                        return option.children.props.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }}
            />
        </div>
    )
}

SelectBase.propTypes = {
    loading: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    datas: PropTypes.oneOfType([PropTypes.array]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showSearch: PropTypes.bool,
    showArrow: PropTypes.bool,
    className: PropTypes.string
}

export default SelectBase;

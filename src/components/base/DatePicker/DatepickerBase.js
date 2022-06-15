import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { getValueAndSetDefault } from 'functions/Utils';

const DatepickerBase = ({ className, suffixIcon, onChange, value, type, disabled, picker, dateFormat, disabledDate, defaultValue, placeholder = "_/_/_", showToday }) => {
 
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return (
        <div className="datepicker-base">
            <DatePicker
                className={getValueAndSetDefault(className, "")}
                onChange={onChange}
                suffixIcon={suffixIcon ? suffixIcon : <i className="las la-calendar"></i>}
                format={dateFormat ? dateFormat : dateFormatList}
                value={value && moment(value, "DD-MM-YYYY")}
                disabled={disabled ? true : false}
                defaultValue={defaultValue}
                type={type}
                placeholder={placeholder ? placeholder : "_/_/_"}
                disabledDate={disabledDate}
                showToday={showToday}
                picker={getValueAndSetDefault(picker, "date")}
            />
        </div>
    )
}

export default DatepickerBase;
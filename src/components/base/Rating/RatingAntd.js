import { Rate } from "antd";
import { getValueAndSetDefault } from "functions/Utils";
import React from "react";

const RatingAntd = ({ className, value, onChange, readOnly}) => {
    return (
        <Rate className={`rating-antd ${getValueAndSetDefault(className, '')}`} value={value} onChange={onChange} readOnly={readOnly}/>
    )
}

export default RatingAntd;
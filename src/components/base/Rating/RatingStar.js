import { Rating } from "@mui/material";
import { getValueAndSetDefault } from "functions/Utils";
import React from "react";

const RatingStar = ({ className, value, onChange, readOnly, size}) => {

    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        if (value){
            setState(value)
        }
    }, [value])


    return (
        <Rating className={`rating-base ${getValueAndSetDefault(className, '')}`} size={size} onChange={(event, newValue) => onChange(newValue)} value={state} readOnly={readOnly}/>
    )
}

export default RatingStar;
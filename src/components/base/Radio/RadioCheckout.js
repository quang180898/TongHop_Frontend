import React from 'react';

const RadioCheckout = ({form, onChange, checked}) => {

    return (
        <input
            type="radio"
            name="radio_delivery"
            className="radio-checkout mr-2"
            checked={checked}
            onChange={(e) => onChange && onChange(form ? e.target.checked : e)}
        />
    );
};

export default RadioCheckout;

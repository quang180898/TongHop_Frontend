import { Radio } from "antd";
import { getValueAndSetDefault } from "functions/Utils";
import React from "react";

const RadioGroupCustom = ({className, value, onChange, disabled, options}) => {
    return (
        <Radio.Group
            className={`radio-group-custom ${getValueAndSetDefault(className, "")}`}
            value={getValueAndSetDefault(value, "")}
            onChange={(e) => onChange && onChange(e.target.value)}
            disabled={disabled}
        >
            {options?.length > 0
                ? options.map((item, index) => {
                      return (
                          <Radio value={item.value} key={"radio " + index}>
                              {item.label}
                          </Radio>
                      );
                  })
                : ""}
        </Radio.Group>
    );
};

export default RadioGroupCustom;

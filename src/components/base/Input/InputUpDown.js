import React, { useEffect, useState } from "react";
import { Button, InputNumber } from "antd";
import { getValueAndSetDefault } from "functions/Utils";

const InputUpDown = ({
  prefix,
  suffix,
  value,
  onChange,
  className,
}) => {
  const [state, setState] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const newNumber = parseInt(e);
    if (newNumber > 0) {
      setState(newNumber);
    }
    // if (onChange) {
    //   onChange(state);
    // }
  };

  useEffect(() => {
    if (state) {
      if (state < 2) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      if (onChange) {
        onChange(state);
      }
    }
  }, [state]);

  useEffect(() => {
    if (value) {
      setState(parseInt(value));
    }
  }, [value]);

  return (
    <InputNumber
      className={`input-updown ${getValueAndSetDefault(className, "")}`}
      onChange={handleChange}
      value={state}
      min={1}
      suffix={suffix}
      prefix={prefix}
      addonBefore={
        <Button
          className=""
          onClick={() => setState(state - 1)}
          disabled={disabled}
        >
          <i class="las la-minus"></i>
        </Button>
      }
      addonAfter={
        <Button className="" onClick={() => setState(state + 1)}>
          <i class="las la-plus"></i>
        </Button>
      }
    />
  );
};

export default InputUpDown;

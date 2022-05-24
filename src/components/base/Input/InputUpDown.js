import React, { useEffect, useState } from "react";
import { Button, InputNumber } from "antd";
import { getValueAndSetDefault } from "functions/Utils";

const InputUpDown = ({
  prefix,
  suffix,
  value,
  onChange,
  onClickDown,
  onClickUp,
  className,
}) => {
  const [state, setState] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const newNumber = parseInt(e);
    if (newNumber > 0) {
      setState(newNumber);
    }
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

  const downCount = () => {
    if (onClickDown) {
      onClickDown()
    }
    setState(state - 1)
  }

  const upCount = () => {
    if (onClickUp) {
      onClickUp()
    }
    setState(state + 1)
  }

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
          onClick={downCount}
          disabled={disabled}
        >
          <i class="las la-minus"></i>
        </Button>
      }
      addonAfter={
        <Button className="" onClick={upCount}>
          <i class="las la-plus"></i>
        </Button>
      }
    />
  );
};

export default InputUpDown;

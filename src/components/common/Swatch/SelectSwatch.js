import { Form } from "antd";
import { IMAGE_URL } from "contant";
import { getValueAndSetDefault } from "functions/Utils";
import React from "react";

const SelectSwatch = ({ form, value, nameForm , nameHeader, className, options}) => {

  const [state, setState] = React.useState({
    selectedValue: null,
    listOptions: options,
  });

  React.useEffect(() => {
    if (options) {
      setState((e) => ({
        ...e,
        selectedValue: options[0],
      }));
      
    }
  }, [options]);

  React.useEffect(() => {
    if (state.selectedValue) {
      form.setFieldsValue({ [nameForm]: state.selectedValue });
    }
  }, [state.selectedValue]);

  const onClickSwatch = (item, index) => {
    if (item) {
      setState((e) => ({
        ...e,
        selectedValue: item,
      }));
    }

    
  };

  return (
    <div className={`select-swatch ${getValueAndSetDefault(className, "")}`}>
      <Form.Item name={nameForm} noStyle>
        <input className="d-none" type="radio" />
      </Form.Item>
      <div className="header-content">{nameHeader}: {state.selectedValue}</div>
      <div className="select-swap">
        {state &&
          state.listOptions?.map((item, index) => {
            return (
              <div
                className="swatch-element"
                key={index}
                onClick={() => onClickSwatch(item, index)}
              >
                <label className={`${item === state.selectedValue ? "sd" : ""}`}>
                      <span>{item}</span>
                      <img
                        className="img-check"
                        width={14}
                        height={14}
                        src={`${IMAGE_URL + "select-pro.png"}`}
                      />
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectSwatch;

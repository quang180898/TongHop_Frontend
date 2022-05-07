import { Form } from "antd";
import { IMAGE_URL } from "contant";
import { getValueAndSetDefault } from "functions/Utils";
import React from "react";
import { useDispatch } from "react-redux";
import { commonAction } from "store/actions";

const SelectSwatch = ({ form, value, nameForm , nameHeader, className, options}) => {

  const dispatch = useDispatch()

  const [state, setState] = React.useState({
    selectedValue: null,
    listOptions: options,
    nameValue: ""
  });

  React.useEffect(() => {
    if (options) {
      setState((e) => ({
        ...e,
        selectedValue: options[0].id,
        nameValue: options[0].name,
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
      const newData = [].concat(state.listOptions);
      let nameData = ""
      for (let i = 0; i < newData.length; i++) {
        if (i == index) {
          newData[i].isActive = true;
          nameData = newData[i].name
        } else {
          newData[i].isActive = false;
        }
      }
      setState((e) => ({
        ...e,
        selectedValue: item.id,
        listOptions: newData,
        nameValue: nameData,
      }));
    }

    
  };

  return (
    <div className={`select-swatch ${getValueAndSetDefault(className, "")}`}>
      <Form.Item name={nameForm} noStyle>
        <input className="d-none" type="radio" />
      </Form.Item>
      <div className="header-content">{nameHeader}: {state.nameValue}</div>
      <div className="select-swap">
        {state &&
          state.listOptions?.map((item, index) => {
            return (
              <div
                className="swatch-element"
                key={index}
                onClick={() => onClickSwatch(item, index)}
              >
                <label className={`${item.isActive ? "sd" : ""}`}>
                  {nameForm == "size" ? 
                    <>
                      <span>{item.name}</span>
                      <img
                        className="img-check"
                        width={14}
                        height={14}
                        src={`${IMAGE_URL + "select-pro.png"}`}
                      />
                    </>
                   : 
                    <span style={{backgroundImage: `url(${item.value}`}}></span>
                  }
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SelectSwatch;

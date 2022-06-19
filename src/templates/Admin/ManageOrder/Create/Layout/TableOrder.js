import { Form } from "antd";
import { InputBase } from "components/base/Input";
import { TableCustom } from "components/base/Table";
import { RULES } from "functions/Utils";
import React from "react";

const TableOrder = ({ form }) => {
    const [state, setState] = React.useState([]);

    React.useEffect(() => {
        if (state.length > 0 && form) {
            form.setFieldsValue({ ["order"]: state });
        }
    }, [state, form]);

    const addSize = () => {
        const newForm =
            state.length > 0 ? form.getFieldValue(["order"]) : [];
        const newDoc = {
            shoes_id: null,
            size: null,
            quantity: null,
            price: null,
        };
        newForm.push(newDoc);
        setState(newForm);
    };

    const handleDelete = (index) => {
        const newData = form.getFieldValue("order");
        newData.splice(index, 1);
        setState(newData);
    };

    const Theader = () => {
        return (
            <tr>
                <th style={{ width: "5%" }} className="col-1 pl-0">
                    STT
                </th>
                <th style={{ width: "20%" }} className="col-4">
                    Mã giày
                </th>
                <th style={{ width: "20%" }} className="col-4">
                    Kích cỡ
                </th>
                <th style={{ width: "20%" }} className="col-4">
                    Số lượng
                </th>
                <th style={{ width: "30%" }} className="col-4">
                    Giá tiền
                </th>
                <th style={{ width: "5%" }} className="col-1 text-center">
                    <i className="las la-cog" />
                </th>
            </tr>
        );
    };

    const Tbody = React.useCallback(({ data, index }) => {
        return (
            <tr>
                <td class="pl-0">{index + 1}</td>
                <td>
                    <Form.Item
                        name={["order", index, "shoes_id"]}
                        className="form-group mb-0"
                        rules={RULES.number.form()}
                    >
                        <InputBase />
                    </Form.Item>
                </td>
                <td>
                    <Form.Item
                        name={["order", index, "size"]}
                        className="form-group mb-0"
                        rules={RULES.number.form()}
                    >
                        <InputBase />
                    </Form.Item>
                </td>
                <td>
                    <Form.Item
                        name={["order", index, "quantity"]}
                        className="form-group mb-0"
                        rules={RULES.number.form()}
                    >
                        <InputBase />
                    </Form.Item>
                </td>
                <td>
                    <Form.Item
                        name={["order", index, "price"]}
                        className="form-group mb-0"
                        rules={RULES.number.form()}
                    >
                        <InputBase />
                    </Form.Item>
                </td>
                <td>
                    <i
                        className="click-action fas fa-trash-alt"
                        onClick={() => handleDelete(index)}
                    ></i>
                </td>
            </tr>
        );
    }, [state]);

    return (
        <>
            <TableCustom
                style={{ minWidth: "500px" }}
                childrenHead={<Theader />}
                childrenBody={
                    state.length > 0 ? (
                        state.map((value, index) => {
                            return (
                                <Tbody index={index} key={index} data={value} />
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center">
                                Không có dữ liệu
                            </td>
                        </tr>
                    )
                }
            />
            <span onClick={addSize}>+ Thêm giày</span>
        </>
    );
};

export default TableOrder;

import { Form } from "antd";
import { InputBase } from "components/base/Input";
import { TableCustom } from "components/base/Table";
import React from "react";

const TableSize = ({ form, data }) => {
    const [state, setState] = React.useState([]);

    React.useEffect(() => {
        if (data) {
            let list = data.length > 0 ? [].concat(data) : [];
            setState(list);
        }
    }, [data]);

    React.useEffect(() => {
        if (state.length > 0 && form) {
            form.setFieldsValue({ ["size_quantity"]: state });
        }
    }, [state, form]);

    const addSize = () => {
        const newForm =
            state.length > 0 ? form.getFieldValue(["size_quantity"]) : [];
        const newDoc = {
            size: null,
            quantity: null,
        };
        newForm.push(newDoc);
        setState(newForm);
    };

    const handleDelete = (index) => {
        const newData = form.getFieldValue('size_quantity')
        newData.splice(index, 1)
        setState(newData)
    }

    const Theader = () => {
        return (
            <tr>
                <th style={{ width: "15%" }} className="col-1 pl-0">
                    STT
                </th>
                <th style={{ width: "40%" }} className="col-4">
                    Kích cỡ
                </th>
                <th style={{ width: "40%" }} className="col-4">
                    Số lượng
                </th>
                <th style={{ width: "5%" }} className="col-1 text-center">
                    <i className="las la-cog" />
                </th>
            </tr>
        );
    };

    const Tbody = ({ data, index }) => {
        return (
            <tr>
                <td class="pl-0">{index + 1}</td>
                <td>
                    <Form.Item
                        name={["size_quantity", index, "size"]}
                        className="form-group mb-0"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập!",
                            },
                        ]}
                    >
                        <InputBase disabled={true}/>
                    </Form.Item>
                </td>
                <td>
                    <Form.Item
                        name={["size_quantity", index, "quantity"]}
                        className="form-group mb-0"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập!",
                            },
                        ]}
                    >
                        <InputBase disabled={true}/>
                    </Form.Item>
                </td>
                <td>
                </td>
            </tr>
        );
    };

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
                            <td colSpan={4} className="text-center">
                                Không có dữ liệu
                            </td>
                        </tr>
                    )
                }
            />
        </>
    );
};

export default TableSize;

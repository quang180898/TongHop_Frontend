import React from "react";
import { RadioBase } from "components/base/Radio";
import {
    collection_category,
    color_category,
    price_category,
    size_category,
} from "constant/collection";
import { CheckboxBase } from "components/base/Checkbox";
import { CollapseBase } from "components/base/Collapse";
import { Form } from "antd";

const CollectionFilter = () => {
    const [formFilter] = Form.useForm();

    const onChange = (e) => {
        console.log(e.target.value);
    };

    const onValuesChange = (e, all) => {
        console.log(e, all);
    };

    return (
        <div className="col-md-3 col-sm-12 col-xs-12 collection-filter">
            <div className="wrap-filter">
                <Form form={formFilter} onValuesChange={onValuesChange}>
                    <CollapseBase className="collapse-collection" forceRender={true} iconPosition="right">
                        <div header={"Danh mục sản phẩm"}>
                            <Form.Item name="collection_product">
                                <RadioBase
                                    options={collection_category}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                        <div header={"Giá sản phẩm"}>
                            <Form.Item name="collection_price">
                                <RadioBase
                                    options={price_category}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                        <div header={"Màu sản phẩm"}>
                            <Form.Item name="collection_color">
                                <CheckboxBase
                                    options={color_category}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>

                        <div header={"Kích thước"}>
                            <Form.Item name="collection_size">
                                <CheckboxBase
                                    options={size_category}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                    </CollapseBase>
                </Form>
            </div>
        </div>
    );
};

export default CollectionFilter;

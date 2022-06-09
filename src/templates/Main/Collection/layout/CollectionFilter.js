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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getValueNumber, getValueText } from "functions/Utils";

const CollectionFilter = () => {
    const { BrandId } = useParams();

    const [formFilter] = Form.useForm();

    const [state, setState] = React.useState({
        dataBrand: null,
        dataCategory: null,
    });

    const store = useSelector((state) => state);
    const { listBrand } = store.brandReducer;
    const { listCategory } = store.categoryReducer;

    React.useEffect(() => {
        formFilter.setFieldsValue({
            collection_product: parseInt(BrandId),
        });
    }, []);

    React.useEffect(() => {
        if (listBrand) {
            let detail = listBrand.detail;
            let newData = [];
            if (listBrand.success) {
                if (detail.length > 0) {
                    for (let i = 0; i < detail.length; i++) {
                        newData.push({
                            value: getValueNumber(detail[i].brand_id),
                            label: getValueText(detail[i].brand_name),
                        });
                    }
                }
                setState((e) => ({ ...e, dataBrand: newData }));
            }
        }
    }, [listBrand]);

    React.useEffect(() => {
        if (listCategory) {
            let detail = listCategory.detail;
            let newData = [];
            if (listCategory.success) {
                if (detail.length > 0) {
                    for (let i = 0; i < detail.length; i++) {
                        newData.push({
                            value: getValueNumber(detail[i].category_id),
                            label: getValueText(detail[i].category_name),
                        });
                    }
                }
                setState((e) => ({ ...e, dataCategory: newData }));
            }
        }
    }, [listCategory]);

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
                    <CollapseBase
                        className="collapse-collection"
                        forceRender={true}
                        iconPosition="right"
                    >
                        <div header={"Danh mục sản phẩm"}>
                            <Form.Item name="collection_product">
                                <RadioBase
                                    options={state.dataBrand}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                        <div header={"Loại sản phẩm"}>
                            <Form.Item name="collection_category">
                                <RadioBase
                                    options={state.dataCategory}
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

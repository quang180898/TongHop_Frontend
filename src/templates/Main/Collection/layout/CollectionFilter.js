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
import { useHistory, useParams } from "react-router-dom";
import { getValueNumber, getValueText } from "functions/Utils";
import { PAGES_URL } from "contant";
import { ButtonBase } from "components/base/Button";

const CollectionFilter = ({setPage}) => {
    const { BrandId } = useParams();
    const history = useHistory();
    const [formFilter] = Form.useForm();

    const [state, setState] = React.useState({
        dataBrand: null,
        dataCategory: null,
        totalPage: null,
        totalRecord: null,
        page: 1,
        limit: 8,
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

    const onChangeBrand = (e) => {
        history.push(PAGES_URL.collection.url + "/" + e.target.value);
    };

    const onChange = (e) => {
        console.log(e.target.value);
    };

    const onValuesChange = (e, all) => {
        const { category = "" } = all;
        let location = history.location;
        setPage(true)
        history.push({
            pathname: location.pathname,
            search: `?category=${category}`,
        });
    };

    const onResetSearch = () => {
        formFilter.resetFields()
        history.push(PAGES_URL.collection.url)
    }

    return (
        <div className="col-md-3 col-sm-12 col-xs-12 collection-filter">
            <div className="wrap-filter">
                <Form form={formFilter} onValuesChange={onValuesChange}>
                    <CollapseBase
                        className="collapse-collection"
                        forceRender={true}
                        iconPosition="end"
                    >
                        <div header={"Danh mục sản phẩm"}>
                            <Form.Item name="collection_product">
                                <RadioBase
                                    options={state.dataBrand}
                                    onChange={onChangeBrand}
                                />
                            </Form.Item>
                        </div>
                        <div header={"Loại sản phẩm"}>
                            <Form.Item name="category">
                                <RadioBase
                                    options={state.dataCategory}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                        <div header={"Giá sản phẩm"}>
                            <Form.Item name="price">
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
                            <Form.Item name="size">
                                <CheckboxBase
                                    options={size_category}
                                    onChange={onChange}
                                />
                            </Form.Item>
                        </div>
                    </CollapseBase>
                </Form>
                <div className="text-center mt-2">
                    <ButtonBase className="btn-blue" label="Huỷ tìm kiếm" onClick={onResetSearch}/>
                </div>
            </div>
        </div>
    );
};

export default CollectionFilter;

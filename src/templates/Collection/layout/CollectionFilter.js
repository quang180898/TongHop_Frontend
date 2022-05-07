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
import { Collapse, Form } from "antd";

const { Panel } = Collapse;

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
          <CollapseBase iconPosition="right">
            <Panel header="Danh mục sản phẩm" key="1">
              <Form.Item name="collection_product">
                <RadioBase options={collection_category} onChange={onChange} />
              </Form.Item>
            </Panel>
            <Panel header="Giá sản phẩm" key="2">
              <Form.Item name="collection_price">
                <RadioBase options={price_category} onChange={onChange} />
              </Form.Item>
            </Panel>
            <Panel header="Màu sản phẩm" key="3">
              <Form.Item name="collection_color">
                <CheckboxBase options={color_category} onChange={onChange} />
              </Form.Item>
            </Panel>
            <Panel header="Kích thước" key="4">
              <Form.Item name="collection_size">
                <CheckboxBase options={size_category} onChange={onChange} />
              </Form.Item>
            </Panel>
          </CollapseBase>
        </Form>
      </div>
    </div>
  );
};

export default CollectionFilter;

import { Form, Input, Rate } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { RatingAntd, RatingStar } from "components/base/Rating";
import { TextAreaBase } from "components/base/TextArea";
import React from "react";

const TabReview = () => {
  const [formSend] = Form.useForm();

  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="tab-review">
      <Form form={formSend} onFinish={onFinish}>
        <h2>Đưa ra đánh giá của bạn</h2>
        <Form.Item name="name">
          <InputBase placeholder="Tên của bạn:" />
        </Form.Item>
        <Form.Item name="comment">
          <TextAreaBase placeholder="Bình luận:" rows={6} />
        </Form.Item>
        <Form.Item name="rate" label="Đánh giá:">
          <RatingAntd className="rating-review"/>
        </Form.Item>
      </Form>
      <div className="text-right">
        <ButtonBase
          className="btn-blue-outline"
          onClick={() => formSend.submit()}
          label="Gửi"
        />
      </div>
    </div>
  );
};

export default TabReview;

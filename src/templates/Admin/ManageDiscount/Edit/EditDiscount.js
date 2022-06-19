import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { DatepickerBase } from "components/base/DatePicker";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import { formatDate, showNotification } from "functions/Utils";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { discountAction } from "store/actions";

const EditOrder = () => {
    const [form] = Form.useForm();
    const { DiscountId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const store = useSelector((state) => state.discountReducer);
    const { updateDiscount } = store;

    React.useEffect(() => {
        if (updateDiscount) {
            let detail = updateDiscount.detail;
            if (updateDiscount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
            }
             else {
                showNotification.success({ title: detail });
             }
            
            dispatch(discountAction.clearData());
        }
    }, [updateDiscount]);

    const onFinish = (e) => {
        if (e) {
            const { percent, end_discount_date } = e;
            let params = {
                shoes_id: DiscountId,
                percent: percent,
                end_discount_date: formatDate({
                    date: end_discount_date,
                    type: "DD/MM/YYYY HH:mm:ss",
                }),
            };
            dispatch(discountAction.postUpdateDiscount(params));
        }
    };

    const disabledDate = (current) => {
        return current && current < moment().endOf('day')
    } 

    return (
        <>
            <CardWrap title="Chỉnh sửa khuyến mãi">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        {/* <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="shoes_id"
                                label="Mã giày"
                                className="form-group"
                            >
                                <InputBase />
                            </Form.Item>
                        </div> */}
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item
                                name="percent"
                                label="Phần trăm khuyến mãi"
                                className="form-group"
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item
                                name="end_discount_date"
                                label="Ngày kết thúc"
                                className="form-group"
                            >
                                <DatepickerBase disabledDate={disabledDate}/>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonBase
                            className="btn-blue"
                            label="Gửi"
                            htmlType="submit"
                        />
                    </div>
                </Form>
            </CardWrap>
            <div className="text-right">
                <ButtonBase
                    className="btn-white mr-2"
                    label="Trở về"
                    onClick={() => history.goBack()}
                />
            </div>
        </>
    );
};

export default EditOrder;

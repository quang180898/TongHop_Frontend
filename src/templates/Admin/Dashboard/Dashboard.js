import CardWrap from "components/common/Card/CardWarp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chartAction } from "store/actions";
import { ChartPrice } from "./Layout";

const Dashboard = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        dataAll: null,
    });
    const store = useSelector((state) => state.chartReducer);
    const { allChart } = store;

    useEffect(() => {
        dispatch(chartAction.getChartAll());
        dispatch(chartAction.getChartTotal());
    }, []);

    useEffect(() => {
        if (allChart) {
            let detail = allChart.detail;
            if (allChart.success) {
                setState({ ...state, dataAll: detail });
            }
        }
    }, [allChart]);

    return (
        <div className="PageDashboard">
            <div className="row sales_summary">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_01 h-100">
                        <div className="image">
                            <i className="icon las la-store" />
                        </div>
                        <div className="text">
                            <div className="text-1">
                                {state?.dataAll?.total_admin}
                            </div>
                            <div className="text-2">Tổng quản lý</div>
                            <div className="text-3">
                                <span
                                    style={{ width: "20%" }}
                                    className="done"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_02 h-100">
                        <div className="image">
                            <i className="icon las la-shopping-basket" />
                        </div>
                        <div className="text">
                            <div className="text-1">
                                {state?.dataAll?.total_customer}
                            </div>
                            <div className="text-2">Tổng người dùng</div>
                            <div className="text-3">
                                <span
                                    style={{ width: "20%" }}
                                    className="done"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_03 h-100">
                        <div className="image">
                            <i className="icon las la-building" />
                        </div>
                        <div className="text">
                            <div className="text-1">
                                {state?.dataAll?.total_product}
                            </div>
                            <div className="text-2">Tổng sản phẩm</div>
                            <div className="text-3">
                                <span
                                    style={{ width: "20%" }}
                                    className="done"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_04 h-100">
                        <div className="image">
                            <i className="icon las la-hotel" />
                        </div>
                        <div className="text">
                            <div className="text-1">
                                {state?.dataAll?.total_product_sell}
                            </div>
                            <div className="text-2">Tổng sản phẩm đã bán</div>
                            <div className="text-3">
                                <span
                                    style={{ width: "20%" }}
                                    className="done"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardWrap title={"Thống kê doanh thu"}>
                <ChartPrice />
            </CardWrap>
        </div>
    );
};

export default Dashboard;

import React from 'react';

const Dashboard = () => {
    return (
        <div className="PageDashboard">
            <div className="row sales_summary">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_01 h-100">
                        <div className="image">
                            <i className="icon las la-store" />
                        </div>
                        <div className="text">
                            <div className="text-1">30</div>
                            <div className="text-2">Tổng sản phẩm</div>
                            <div className="text-3">
                                <span style={{ width: '20%' }} className="done" />
                            </div>
                            <div className="text-4"><i className="las la-arrow-up fs-12" /> 86</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex flex-column">
                    <div className="sales_summary--item style_02 h-100">
                        <div className="image">
                            <i className="icon las la-shopping-basket" />
                        </div>
                        <div className="text">
                            <div className="text-1">5</div>
                            <div className="text-2">Tổng nhân viên</div>
                            <div className="text-3">
                                <span style={{ width: '20%' }} className="done" />
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
                            <div className="text-1">6</div>
                            <div className="text-2">Tổng khách hàng</div>
                            <div className="text-3">
                                <span style={{ width: '20%' }} className="done" />
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
                            <div className="text-1">15</div>
                            <div className="text-2">Tổng sản phẩm đã bán</div>
                            <div className="text-3">
                                <span style={{ width: '20%' }} className="done" />
                            </div>
                            <div className="text-4"><i className="las la-arrow-up fs-12" /> 6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
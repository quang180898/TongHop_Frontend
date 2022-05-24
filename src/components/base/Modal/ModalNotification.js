import { Modal } from "antd";
import React from "react";

const ModalNotification = (props) => {
    const { visible, setVisible } = props;

    React.useEffect(() => {
        if (visible.isShow) {
            const timer = setTimeout(() => {
                onCancel()
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible.isShow]);

    const onCancel = () => {
        setVisible((e) => ({...e, isShow: false}));
    };

    return visible.isShow ? (
        <Modal
            footer={false}
            forceRender
            onCancel={onCancel}
            visible={visible.isShow}
            centered
            closeIcon={<a className="close-modal" />}
            className="modal-notification"
            width="400px"
            destroyOnClose={true}
        >
            <div className="modal-icon">
                <div className="sa-success">
                    <span className="sa-line sa-tip"></span>
                    <span className="sa-line sa-long"></span>
                    <div className="sa-placeholder"></div>
                    <div className="sa-fix"></div>
                </div>
            </div>
            <div className="modal-body">
                <p className="modal-title">Thêm vào giỏ thành công</p>
                <div className="media-success">
                    <div className="media-left">
                        <span className="quantity">{visible.item.quantity ? visible.item.quantity + 1 : 1}</span>
                        <div className="thumb-cart">
                            <img
                                width="70px"
                                src={visible.item.image}
                            />
                        </div>
                    </div>
                    <div className="media-body">
                        <div className="media-title">{visible.item.name}</div>
                        <div className="media-price">
                            <span>{visible.item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    ) : (
        <></>
    );
};

export default ModalNotification;

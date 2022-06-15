import React, { useState } from 'react';
import { Modal } from 'antd';

const ModalConfirm = (props) => {
    const { visible, onComfirm, onCancel, name_contact, comfirm_title, btn_confirm_name, btn_cancer_name, hideConfirm = false, hideCancel = false } = props

    return (
        <Modal
            name-c="ModalConfirm"
            footer={false}
            forceRender
            visible={visible}
            centered
            className="modal-change-state"
            width='400px' >
            <div className="swal-modal">
                <div className="swal-icon swal-icon--warning">
                    <span className="swal-icon--warning__body">
                    </span>
                </div>
                <div className="swal-title" >{comfirm_title}</div>
                <div className="swal-text" >{name_contact}</div>
                <div className="swal-footer">
                    {!hideCancel ?
                        <div className="swal-button-container">
                            <button className="swal-button swal-button--cancel" onClick={onCancel}>{btn_cancer_name}</button>
                            <div className="swal-button__loader"></div>
                        </div>
                        : ""}
                    {!hideConfirm ?
                        <div className="swal-button-container">
                            <button className="swal-button swal-button--confirm" onClick={onComfirm}>{btn_confirm_name}</button>
                        </div>
                        : ""}
                </div>
            </div>
        </Modal>
    )
}

export default ModalConfirm;

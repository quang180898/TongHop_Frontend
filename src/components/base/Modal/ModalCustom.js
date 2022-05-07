import React, { useState } from 'react';
import { Modal } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';
import PropTypes from 'prop-types';
import { CardHeader } from 'components/common/Card';

const ModalCustom = (props) => {
    const { visible, widthModal, title, classBody, classModal, onCancel, style, isHeaderBase = true, isHeaderCart = false, centered = true, strongName, maskClosable = false, keyboard = false } = props

    return (
        visible ? <Modal
            footer={false}
            forceRender
            visible={visible}
            onCancel={onCancel}
            style={style}
            centered={centered}
            // maskClosable={maskClosable}
            keyboard={keyboard}
            className={`modal-card ${getValueAndSetDefault(classModal, '')}`}
            width={getValueAndSetDefault(widthModal, '390px')}
            destroyOnClose={true}
        >
            <div className="modal-content">
                {isHeaderBase && <CardHeader title={title} strongName={strongName} /> }
                {isHeaderCart && 
                    <div className='modal-cart-header'>
                        
                    </div>
                }    
                <div className={`modal-body ${getValueAndSetDefault(classBody, '')}`}>
                    {props.children}
                    {props.button}
                </div>
            </div>
        </Modal> : <></>
    )
}
ModalCustom.propTypes = {
    visible: PropTypes.bool,
    widthModal: PropTypes.any,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    classModal: PropTypes.string,
    centered: PropTypes.bool
}
export default ModalCustom;

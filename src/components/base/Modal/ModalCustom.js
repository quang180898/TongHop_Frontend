import React, { useState } from 'react';
import { Modal } from 'antd';
import { getValueAndSetDefault } from 'functions/Utils';
import PropTypes from 'prop-types';
import { CardHeader } from 'components/common/Card';

const ModalCustom = (props) => {
    const { visible, widthModal, title, titleCart, classBody, classModal, onCancel, style, isShowClose = false, isHeaderBase = true, isHeaderCart = false, centered = true, strongName, maskClosable = false, keyboard = false } = props

    return (
        visible ? <Modal
            footer={false}
            forceRender
            visible={visible}
            onCancel={onCancel}
            style={style}
            centered={centered}
            closeIcon={
                <a className='close-modal'/>
            }
            // maskClosable={maskClosable}
            keyboard={keyboard}
            className={`modal-card ${getValueAndSetDefault(classModal, '')} ${isShowClose ? 'show-close' : ''}`}
            width={getValueAndSetDefault(widthModal, '390px')}
            destroyOnClose={true}
        >
            <div className="modal-content">
                {isHeaderBase && <CardHeader title={title} strongName={strongName} /> }
                {isHeaderCart && 
                    <div className='modal-cart-header'>
                        {title}
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

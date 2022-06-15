import React from 'react';
import { ModalConfirm } from 'components/base/Modal';
import { useDispatch } from 'react-redux';
import { brandAction } from 'store/actions';

const ModalDeleteOrder = ({ state, setState}) => {

    const dispatch = useDispatch()

    const onSubmit = () => {
        if (state) {
            let id = state.saveParams.id
            dispatch(brandAction.postDeleteBrand({brand_id: id}))
        }
    }

    const onCancel = () => {
        setState(e => ({...e, isShowModal: false}))
    }

    return (
        <ModalConfirm
            visible={state.isShowModal}
            onCancel={onCancel}
            onComfirm={onSubmit}
            comfirm_title="Bạn chắc chắn muốn xoá"
            name_contact={state.saveParams?.name}
            btn_cancer_name="Từ chối"
            btn_confirm_name="Đồng ý"
        />
        
    )
}

export default ModalDeleteOrder;
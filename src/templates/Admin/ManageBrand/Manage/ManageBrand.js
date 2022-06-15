
import { DropdownBase } from 'components/base/Dropdown';
import CardWrap from 'components/common/Card/CardWarp';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { brandAction } from 'store/actions';

const ManageBrand = () => {

    const dispatch = useDispatch();

    const [state, setState] = React.useState()

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        saveData: null,
        isShowModal: false,
    })

    const store = useSelector(state => state.brandReducer)
    const { listBrand } = store 

    React.useEffect(() => {
        dispatch(brandAction.getListBrand());
    }, []);

    React.useEffect(() => {
        if (listBrand) {
            let detail = listBrand.detail
            if (listBrand.success) {
                console.log(detail)
                setState(detail)
            }
            // dispatch(brandAction.clearData()) 
        }
    }, [listBrand])

    const handleDelete = (id) => {
        const newArray = [].concat(state)
        const newData = newArray.filter(i => i.id !== id)
        let params = {
            id: null,
            name: null,
        }
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                params.id = newArray[i].id
                params.name = newArray[i].user_name
            }
        }
        setStateLocal(e => ({ ...e, saveParams: params, saveData: newData, isShowModal: true }))
    }

    const optionsAction = [
        {
            label: <div className='d-flex'>
                <Link to={"/#"}> + Tạo thương hiệu</Link>
            </div>,
        },
    ]

    const onChangeMenuAction = (e) => {
    }

    const Heading = () => {
        return (
            <>
                <div className="exchange-rate ml-auto">
                    <DropdownBase
                        className=""
                        options={optionsAction}
                        onChangeMenu={(e) => onChangeMenuAction(e)}
                        placement="bottomRight"
                        overlayClassName="dropdown-blue-overlay"
                    >
                        <button type="button" class="btn_blue_outline dropdown-toggle">Hành động</button>
                    </DropdownBase>
                </div>
            </>
        )
    }

    return (
        
        <CardWrap title="Quản lý thương hiệu" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên thương hiệu</th>
                            <th scope="col"><i class="fas fa-cog"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {state && state.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td><Link to={PAGES_URL.brand.url + "/" + item.id} className="">{item.brand_name}</Link></td>
                                        <td><i className="click-action fas fa-trash-alt" onClick={() => handleDelete(item.brand_id)}></i></td>
                                    </tr>
                                )       
                        
                        })           
                        } */}
                    </tbody>
                </table>
            </div>
        </CardWrap>
    )
}
export default ManageBrand;
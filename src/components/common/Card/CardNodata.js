import { IMAGE_URL } from 'contant';
import React from 'react';

const CardNodata = () => {
    return (
        <div className="data_null">
            <figure className="data_null--image">
                <img src={IMAGE_URL + "no_data.png"} alt="No data" />
                <span className="data_null--text text-uppercase">Không có dữ liệu</span>
            </figure>
        </div>

    )
}
export default CardNodata
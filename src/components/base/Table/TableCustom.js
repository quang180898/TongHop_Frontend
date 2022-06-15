import { getValueAndSetDefault } from 'functions/Utils';
import React from 'react';

const TableCustom = ({ isFixed, maxHeightTb, className, classNameWrap, childrenHead, childrenBody, childrenFoot, style, isTable = true }) => {
    return (
        // mb-3 m_table m_table--list_project m_table--sales max-height-100 table_fixed
        <div className="cus-table">
            <table className={getValueAndSetDefault(className, '')} style={style}>
                <thead>
                    {childrenHead}
                </thead>
                <tbody style={{ maxHeight: getValueAndSetDefault(maxHeightTb, '') }}>
                    {childrenBody ? childrenBody : <tr><td className="text-center" colSpan="100%">Không có dữ liệu</td></tr>}
                </tbody>
                <tfoot>
                    {childrenFoot}
                </tfoot>
            </table>
        </div>
    )
}

export default TableCustom;
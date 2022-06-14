import { PaginationBase } from 'components/base/Pagination';
import React from 'react';

const usePagination = ({ page, totalRecord, totalPage, limit, className }) => {
    const [state, setState] = React.useState({
        Pagination: null,
        page: 0
    })

    //khởi tạo state page
    React.useEffect(() => {
        if (page > 0 && totalPage > 0 && totalRecord > 0 && page != state.page) {
            setState(e => ({ ...e, page: page }))
        }
    }, [page, totalPage, totalRecord])

    //change page khi search hoặc nhấn page
    const onChangePage = React.useCallback((value) => {
        if (value > 0) {
            setState(e => ({ ...e, page: value }))
        }
    }, [state.page])

    //lấy html paginotion đê show ra
    React.useEffect(() => {
        if (totalPage > 0 && totalRecord > 0) {
            let html = (
                <PaginationBase
                    totalRecord={totalRecord}
                    page={state.page}
                    limit={limit}
                    totalPage={totalPage}
                    onChange={onChangePage}
                    className={className}
                />
            )
            setState(e => ({ ...e, Pagination: html }))
        }
    }, [state.page, totalPage, totalRecord])    //them totalRecord để bắt thêm, TH totalPage trả về số lượng 2 lần search = nhau thì useEffect k chạy lại html


    //trả data về cho component
    return {
        ...state
    }
}

export default usePagination
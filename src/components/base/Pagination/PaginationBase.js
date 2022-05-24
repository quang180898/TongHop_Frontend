import React from "react";
import { Pagination as PaginationAntd } from 'antd';
import { useTranslation } from "react-i18next";

const PaginationBase = ({ className = "m_pager", showTotal = false, showSizeChanger = false,
    totalRecord, page, limit = 10, totalPage, onChange, itemRenderProp, showLessItems = false }) => {

    const [state, setState] = React.useState({
        page: 1,
        limit: 10,
        totalRecord: 0,
        totalPage: 0,
        inputPage: 0
    })

    let timeOut
    React.useEffect(() => {
        if (page > 0) {
            setState(e => ({ ...e, limit: limit, page: parseInt(page), totalRecord: totalRecord, totalPage: totalPage }))
        }

        if (timeOut) clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            onHide(totalPage)
        }, 0);

    }, [page, totalPage])

    React.useEffect(() => {
        if (page > 0) {
            setState(e => ({ ...e, limit: limit, totalRecord: totalRecord, totalPage: totalPage, inputPage: 0 }))
        }
    }, [totalRecord])

    const onHide = (totalPage) => {
        let doc = document.getElementsByClassName(`ant-pagination-item`)
        let total = totalPage - page;
        if (doc.length == 6) {
            for (let i = 0; i < doc.length; i++) {
                if (total > 2) {
                    if (i == 5) {
                        doc[i].hidden = true
                    }
                    else {
                        doc[i].hidden = false
                    }
                }
                else {
                    if (i == 0) {
                        doc[i].hidden = true
                    }
                    else {
                        doc[i].hidden = false
                    }
                }
            }
        }
        else {
            if (doc.length == 7) {
                for (let i = 0; i < doc.length; i++) {
                    if (i == 0 || i == 6) {
                        doc[i].hidden = true
                    }
                    else {
                        doc[i].hidden = false
                    }
                }
            }
            else {
                for (let i = 0; i < doc.length; i++) {
                    doc[i].hidden = false
                }
            }
        }
    }

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Trang trước</a>;
        }
        if (type === 'next') {
            return <a>Trang kế</a>;
        }
        if (type === "jump-prev" || type === "jump-next") {
            return null
        }
        return originalElement;
    }

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0) {
            if (onChange) {
                onChange(pageNumber)
            }
        }
    }

    const onChangePage = (pageNumber) => {
        let currentPage = pageNumber;
        if (currentPage < 1 && currentPage != "") {
            currentPage = 1
        }
        else {
            if (currentPage >= state.totalPage) {
                currentPage = state.totalPage
            }
        }
        setState(e => ({ ...e, inputPage: currentPage }))
    }

    const onChangeInput = (e) => {
        if (e.key == "Enter") {
            if (state.inputPage >= state.totalPage) {
                handlePageChange(state.totalPage)
            }
            else {
                handlePageChange(state.inputPage)
            }
        }
    }
    return (
        <div className="m_pagination">
            {/* <div className="content content_border" onClick={() => handlePageChange(1)} >
                <a className={page > 1 ? "item" : "item disabled"}>Trang đầu</a>
            </div> */}
            <PaginationAntd
                className={className}
                // defaultCurrent={page}
                pageSize={state.limit}
                current={state.page}
                onChange={handlePageChange}
                // showTotal={showTotal ? (total, range) => `${range[0]} tới ${range[1]} của ${total} mục` : ''}
                itemRender={itemRenderProp ? itemRenderProp : itemRender}
                total={state.totalRecord}
                responsive={true}
                showLessItems={showLessItems}
                showSizeChanger={showSizeChanger}
            />
            {/* <div className="content content_border" onClick={() => handlePageChange(state.totalPage)} >
                <a className={page < state.totalPage ? "item" : "item disabled"}>Trang cuối</a>
            </div> */}
            {/* <div className="content content_border page-current" >
                {showTotal ? <>
                    <b className="mr-1">{state.page}</b> {t("pagination_to")} <b className="ml-1 mr-1">{state.totalPage}</b> {t("pagination_of")} {state.totalRecord} {t('pagination_records')}

                </>
                    : <> <b className="mr-1">{state.page}</b> {t("pagination_of")} <b className="mr-1 ml-1">{state.totalPage}</b></>
                }
            </div> */}
            {/* <div className="vertical-dash">|</div> */}
            {/* <div className="content content_border text-page d-inline-flex">
                {`${t("pagination_search_page")} :  `}
                <div className="form-group mb-0 ml-1">
                    <input
                        value={state.inputPage > 0 ? state.inputPage : ""}
                        className="form-control square page-number text-center"
                        placeholder={t("pagination_page_id")}
                        type="number"
                        onChange={e => onChangePage(e.target.value)}
                        onKeyDown={e => onChangeInput(e)} />
                </div>
            </div> */}
        </div>

    )
}

export default PaginationBase;


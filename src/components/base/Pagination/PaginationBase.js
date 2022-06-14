import React from "react";
import { Pagination as PaginationAntd } from "antd";
import { useTranslation } from "react-i18next";

const PaginationBase = ({
    className = "m_pager",
    showSizeChanger = false,
    totalRecord,
    page,
    limit = 10,
    totalPage,
    onChange,
    itemRenderProp,
    showLessItems = false,
}) => {
    const [state, setState] = React.useState({
        page: 1,
        limit: 10,
        totalRecord: 0,
        totalPage: 0,
        inputPage: 0,
    });

    let timeOut;
    React.useEffect(() => {
        if (page > 0) {
            setState((e) => ({
                ...e,
                limit: limit,
                page: parseInt(page),
                totalRecord: totalRecord,
                totalPage: totalPage,
            }));
        }

        if (timeOut) clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            onHide(totalPage);
        }, 0);
    }, [page, totalPage]);

    React.useEffect(() => {
        if (page > 0) {
            setState((e) => ({
                ...e,
                limit: limit,
                totalRecord: totalRecord,
                totalPage: totalPage,
                inputPage: 0,
            }));
        }
    }, [totalRecord]);

    const onHide = (totalPage) => {
        let doc = document.getElementsByClassName(`ant-pagination-item`);
        let total = totalPage - page;
        if (doc.length == 6) {
            for (let i = 0; i < doc.length; i++) {
                if (total > 2) {
                    if (i == 5) {
                        doc[i].hidden = true;
                    } else {
                        doc[i].hidden = false;
                    }
                } else {
                    if (i == 0) {
                        doc[i].hidden = true;
                    } else {
                        doc[i].hidden = false;
                    }
                }
            }
        } else {
            if (doc.length == 7) {
                for (let i = 0; i < doc.length; i++) {
                    if (i == 0 || i == 6) {
                        doc[i].hidden = true;
                    } else {
                        doc[i].hidden = false;
                    }
                }
            } else {
                for (let i = 0; i < doc.length; i++) {
                    doc[i].hidden = false;
                }
            }
        }
    };

    const itemRender = (current, type, originalElement) => {
        if (type === "prev") {
            return <a>Trang trước</a>;
        }
        if (type === "next") {
            return <a>Trang kế</a>;
        }
        if (type === "jump-prev" || type === "jump-next") {
            return null;
        }
        return originalElement;
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0) {
            if (onChange) {
                onChange(pageNumber);
            }
        }
    };

    return (
        <div className="m_pagination">
            <div
                className="content content_border"
                onClick={() => handlePageChange(1)}
            >
                <a className={page > 1 ? "item" : "item disabled"}>Trang đầu</a>
            </div>
            <PaginationAntd
                className={className}
                // defaultCurrent={page}
                pageSize={state.limit}
                current={state.page}
                onChange={handlePageChange}
                itemRender={itemRenderProp ? itemRenderProp : itemRender}
                total={state.totalRecord}
                responsive={true}
                showLessItems={showLessItems}
                showSizeChanger={showSizeChanger}
            />
            <div
                className="content content_border"
                onClick={() => handlePageChange(state.totalPage)}
            >
                <a
                    className={
                        page < state.totalPage ? "item" : "item disabled"
                    }
                >
                    Trang cuối
                </a>
            </div>
        </div>
    );
};

export default PaginationBase;

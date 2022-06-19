import React from "react";
import { Pagination as PaginationAntd } from "antd";

const PaginationBase = ({
    className = "m_pager",
    data,
    onChange,
    itemRenderProp,
    showSizeChanger = false,
    showLessItems = false,
}) => {

    let timeOut
    React.useEffect(() => {
        if (timeOut) clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            onHide(data.total_page)
        }, 0);

    }, [data.page, data.total_page])

    const onHide = (totalPage) => {
        let doc = document.getElementsByClassName(`ant-pagination-item`)
        let total = totalPage - data.page;
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
                <a
                    className={`item ${data.page > 1 ? "" : " disabled"}`}
                    disabled={data.page > 1 ? false : true}
                >
                    Trang đầu
                </a>
            </div>
            <PaginationAntd
                className={className}
                pageSize={data.limit}
                current={data.page}
                onChange={handlePageChange}
                itemRender={itemRenderProp ? itemRenderProp : itemRender}
                total={data.total_record}
                responsive={true}
                showLessItems={showLessItems}
                showSizeChanger={showSizeChanger}
            />
            <div
                className="content content_border"
                onClick={() => handlePageChange(data.total_page)}
            >
                <a
                    className={`item ${
                        data.page < data.total_page ? "" : " disabled"
                    }`}
                    disabled={data.page < data.total_page ? false : true}
                >
                    Trang cuối
                </a>
            </div>
        </div>
    );
};

export default PaginationBase;

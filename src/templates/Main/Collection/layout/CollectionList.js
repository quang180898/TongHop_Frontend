import { DropdownCollection } from "components/base/Dropdown";
import { ProductBlock } from "components/common/Product";
import { listProduct } from "dataFake/dataFake";
import React from "react";
import { usePagination } from "useHook";

const CollectionList = () => {
    const [state, setState] = React.useState({
        dataShoes: null,
        totalPage: null,
        totalRecord: null,
        page: 1,
        limit: 6,
    });

    const pagination = usePagination({
        showTotal: true,
        page: state.page,
        totalRecord: state.totalRecord,
        totalPage: state.totalPage,
        limit: state.limit,
    });

    const callApi = (region = state.region, province = state.province, projectType = state.projectType, projectStatus = state.projectStatus) => {
      dispatch(commonAction.getProjectList({
          page: isPage ? 1 : state.page,
          region_id: region > 0 ? region : null,
          province_id: province > 0 ? province : null,
          setting_type: projectType > 0 ? projectType : null,
          status_id: projectStatus > 0 ? projectStatus : null,
          limit: 6
      }))
  }

    return (
        <div className="col-md-9 col-sm-12 col-xs-12 collection-list">
            <div className="collection-top-bar">
                <div className="collection-title">
                    <h1>Vans</h1>
                </div>
                <div className="product-short">
                    <div className="wrap-box-sort">
                        <label>Sắp xếp:</label>
                        <DropdownCollection></DropdownCollection>
                    </div>
                </div>
            </div>
            <div className="content-product-list d-flex">
                {state &&
                    state.length > 0 &&
                    state.map((item, index) => {
                        return (
                            <div
                                className="col-lg-3 col-md-3 col-sm-4 col-xs-6 pr-0 d-flex-column"
                                key={index}
                            >
                                <ProductBlock item={item} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default CollectionList;

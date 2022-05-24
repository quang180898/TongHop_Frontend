import { Breadcrumb } from "components/common/Breadcrumb";
import { IMAGE_URL } from "contant";
import React from "react";
import { MAIN } from "routes";
import { CollectionFilter, CollectionList } from "./layout";

const Collection = () => {
  return (
    <div className="collection">
      <Breadcrumb router={MAIN} />
      <div className="collection-template">
        <div className="container">
          <div className="collection-banner">
            <img src={`${IMAGE_URL + "banner-vans.jpg"}`}/>
          </div>
          <div className="row d-flex">
              <CollectionFilter/>
              <CollectionList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

// import { PaginationSingle } from "components/base/Pagination";
import { ProductBlock } from "components/common/Product";
import { SliderMain } from "components/base/Slider";
import { PAGES_URL } from "contant";
import { LoadDataPaging, showNotification } from "functions/Utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { listProduct } from "dataFake/dataFake";

const dataFake = [
  {
    image:
      "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
  },
  {
    image:
      "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
  },
];

const Home = () => {
  const [state, setState] = React.useState(listProduct);
  return (
    <div className="content">
      <SliderMain data={dataFake} />
      <div className="container">
        <div className="box-content">
          <img src="https://drake.vn/image/catalog/banner/Banner%20danh%20muc%20trang%20chu/03.2022/danh-muc-converse-sneaker-0322.jpg"></img>
        </div>
        <div className="tab-content">
          <div className="d-flex flex-wrap">
            {state &&
              state.length > 0 &&
              state.map((item, index) => {
                return (
                  <div className="d-flex-column col-lg-2 col-md-3 col-sm-4 col-xs-6 pr-0" key={index}>
                    <ProductBlock item={item} />
                  </div>
                );
              })}
          </div>
          <div className="view-more">
            <a href="/#">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

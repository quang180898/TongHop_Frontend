import { ProductBlock } from "components/common/Product";
import { SliderMain } from "components/base/Slider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoesAction } from "store/actions";
import { IMAGE_URL } from "contant";

const dataFake = [
    {
        image: IMAGE_URL + "banner-home.jpg",
    },
    {
        image: "https://file.hstatic.net/1000040357/file/happy_birthday1920x890-_65264940032c4aa493940e25e2e3cb74.jpg",
    },
];

const Home = () => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState(null);
    const store = useSelector((state) => state.shoesReducer);
    const { homeShoes } = store;

    React.useEffect(() => {
        dispatch(shoesAction.getHomeShoes());
    }, []);

    React.useEffect(() => {
        if (homeShoes) {
            let detail = homeShoes.detail;
            if (homeShoes.success) {
                console.log(detail);
                setState(detail);
            }
        }
    }, [homeShoes]);

    return (
        <div className="content">
            <SliderMain data={dataFake} />
            <div className="container">
                {state &&
                    state?.length > 0 &&
                    state.map((item, index) => {
                        return (
                            <div className="home-wrapper" key={index}>
                                <div className="box-content" >
                                    <img
                                        src={`data:image/jpeg;base64, ${item?.shoes_brand_image}`}
                                        alt="image"
                                    />
                                </div>
                                <div className="tab-content">
                                    <div className="d-flex flex-wrap">
                                        {item?.list_shoes?.length > 0 &&
                                            item?.list_shoes?.map(
                                                (value, indexList) => {
                                                    return (
                                                        <div
                                                            className="d-flex-column col-lg-2 col-md-3 col-sm-4 col-xs-6 pr-0"
                                                            key={indexList}
                                                        >
                                                            <ProductBlock
                                                                item={value}
                                                            />
                                                        </div>
                                                    );
                                                }
                                            )}
                                    </div>
                                    <div className="view-more">
                                        <a href="/#">See More </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Home;

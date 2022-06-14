import { Tooltip } from "@mui/material";
import { SliderThumb } from "components/base/Slider";
import { IMAGE_URL } from "contant";
import React, { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { useDispatch, useSelector } from "react-redux";
import { MappingShoesDetail } from "../mapData";

const ProductGallery = () => {
    const [state, setState] = React.useState(null);
    const [image, setImage] = React.useState();
    const [discount, setDiscount] = React.useState();

    const sliderRef = useRef();

    const store = useSelector((state) => state);
    const { detailShoes } = store.shoesReducer;

    React.useEffect(() => {
        if (detailShoes) {
            let detail = detailShoes.detail;
            if (detailShoes.success) {
                let dataGallery = [];
                let dataDiscount = null;
                if (detail) {
                    dataGallery = MappingShoesDetail(detail);
                    dataDiscount = detail.discount_percent
                }
                setState(dataGallery);
                setDiscount(dataDiscount);
                setImage(dataGallery[0].image_bytes);
            }
        }
    }, [detailShoes]);

    // React.useEffect(() => {
    //   if (isChangeImage) {
    //     onChangeImageColor(isChangeImage);
    //   }

    // }, [isChangeImage]);

    // const onChangeImageColor = (id) => {
    //   if (id) {
    //     const newData = [].concat(state)
    //     let dataImage = ""
    //     for (let i = 0; i < newData.length; i++) {
    //       if (newData[i].id == id) {
    //         newData[i].isActive = true;
    //         dataImage = newData[i].image
    //         sliderRef.current.slickGoTo(i)
    //       } else {
    //         newData[i].isActive = false;
    //       }
    //     }
    //     setState(newData);
    //     setImage(dataImage);
    //   }
    // };

    const onClickChangeImage = (item) => {
        if (item) {
            const newData = [].concat(state);
            for (let i = 0; i < newData.length; i++) {
                if (newData[i].image_id == item.image_id) {
                    newData[i].isActive = true;
                } else {
                    newData[i].isActive = false;
                }
            }
            setState(newData);
            setImage(item.image_bytes);
        }
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-wrap d-flex gallery-product-template">
            <div className="product-thumb">
                <SliderThumb sliderRef={sliderRef}>
                    {state &&
                        state?.length > 0 &&
                        state.map((item, index) => (
                            <a
                                className={`product-thumbnail ${
                                    item.isActive ? "active" : ""
                                }`}
                                key={index}
                                onClick={() => onClickChangeImage(item)}
                            >
                                <img
                                    src={`data:image/jpeg;base64, ${item.image_bytes}`}
                                    alt="image"
                                />
                            </a>
                        ))}
                </SliderThumb>
            </div>
            <div className="product-gallery">
                <div className="product-wishlist">
                    <Tooltip title="Yêu thích" placement="left" arrow>
                        <button className="">
                            <img src={`${IMAGE_URL + "heart.svg"}`}></img>
                        </button>
                    </Tooltip>
                </div>
                {discount > 0 && (
                    <span className="product-sale-detail">
                        <span className="sale">-{discount}%</span>
                    </span>
                )}
                <InnerImageZoom
                    src={`data:image/jpeg;base64, ${image}`}
                    className="product-image-feature"
                    zoomType="hover"
                    zoomPreload={true}
                />
            </div>
        </div>
    );
};

export default ProductGallery;

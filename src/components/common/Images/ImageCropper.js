import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getBase64 } from "../../../functions/Utils";

const ImageCropper = (props) => {
    const { state, setCropperData } = props;
    const cropperRef = useRef(null);

    const [img, setImg] = useState()
    const [cropper, setCropper] = useState()


    const onCrop = () => {
        const imageElement = cropperRef?.current;
        setCropper(imageElement?.cropper);
        if (cropper) {
            cropper.destroy();
        }
        setCropperData(imageElement?.cropper)
    };

    useEffect(() => {
        if (state) {
            if (state.fileUpload) {
                let file = state.fileUpload;
                getBase64(file.originFileObj, imageUrl => {
                    let blob = URL.createObjectURL(file.originFileObj)
                    setImg(blob)
                })
            }
        }
    }, [state])

    return (
        <Cropper
            src={img}
            style={{ width: "100%", height: '300px' }}
            aspectRatio={1 / 1}
            viewMode={2}
            minCropBoxWidth={128}
            minCropBoxHeight={128}
            guides={false}
            crop={(e) => onCrop()}
            ref={cropperRef}
        />
    );
};

export default ImageCropper
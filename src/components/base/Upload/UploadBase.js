import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadBase = ({onChange}) => {

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      
        if (!isJpgOrPng) {
          message.error("You can only upload JPG/PNG file!");
        }
      
        return isJpgOrPng;
      };

    return (
        <Upload
            listType="picture"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}    
            onChange={onChange}
        >
            <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    );
};

export default UploadBase;

import React from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadBase = () => {
    return (
        <Upload
            listType="picture"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
            <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    );
};

export default UploadBase;

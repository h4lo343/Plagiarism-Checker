import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
import React, { useEffect } from "react";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { HttpRequestHeader } from "antd/es/upload/interface";
import { useParams } from "react-router-dom";
import { getBufferFileList } from "../../redux/bufferFileList/slice";

export const UploadBox = () => {

    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const { subjectCode, assignmentName } = useParams();
    const dispatch = useReduxDispatch();
    const headers: HttpRequestHeader = {
        token: jwtToken ? jwtToken : ""
    };
    const data = { "subjectCode": subjectCode, "assignment": assignmentName };
    const onUpload = () => {
        setTimeout(() => {
            dispatch(getBufferFileList({ jwtToken, subjectCode, assignmentName }));
        }, 1500)
    };
    return (
        <Space
            style={{
                width: "20%",
                bottom: 50,
                right: 0
            }}
            size={"large"}
        >
            <Upload
                data={data}
                action={"http://localhost:8888/file/upload-files"}
                headers={headers}
                listType="text"
                maxCount={1}
                method={"POST"}
                accept={".pdf,.png,.docx,.doc"}
                onChange={onUpload}
                multiple={true}
            >
                <Button icon={<UploadOutlined />}
                        style={{
                            width: 100,
                            height: 45,
                            fontSize: "15px",
                            borderRadius: 10
                        }}
                >
                    Upload
                </Button>
            </Upload>
        </Space>
    )
        ;
};
 

 

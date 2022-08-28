import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {Link} from "react-router-dom";
import {useReduxDispatch} from "../../redux/hooks";
import {resultSlice} from "../../redux/result/slice";

interface FileItem {
    fileName: string;
    uploadDate: string;
}



interface PropsType {
    uploadedFileList: any;
}

export const UploadedFileList: React.FC<PropsType> = ({
                                                          uploadedFileList,
                                                      }) => {

    const dispatch = useReduxDispatch();
    const onClick = () => {
        dispatch(resultSlice.actions.delete());
    }

    const columns: ColumnsType<FileItem> = [
        {
            title: "File Name",
            dataIndex: "fileName",
            key: "fileName",
        },
        {
            title: "Upload Date",
            dataIndex: "uploadDate",
            key: "uploadDate",
        }
    ];

    const fileItem: FileItem = uploadedFileList.file ? {
        fileName: uploadedFileList.file,
        uploadDate: (new Date()).toDateString()
    } : {
        fileName: "No File",
        uploadDate: "No Record"
    };


    return (
        <Skeleton loading={false} active>
            <Table<FileItem>
                style={{width: 400}}
                columns={columns}
                dataSource={[fileItem]}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {Link} from "react-router-dom";

interface FileItem {
    fileName: string;
    subjectId: string;
    subjectName: string;
    assignmentName: string;
    dueDate: string;
    uploadDate: string;
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
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={"result"} replace={true}>Check Similarity</Link>
            </Space>
        ),
    }
];

interface PropsType {
    loading: boolean;
    uploadedFileList: any;
}

export const UploadedFileList: React.FC<PropsType> = ({
                                                          loading,
                                                          uploadedFileList,
                                                      }) => {


    return (
        <Skeleton loading={loading} active>
            <Table<FileItem>
                style={{width: 400}}
                columns={columns}
                dataSource={uploadedFileList}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
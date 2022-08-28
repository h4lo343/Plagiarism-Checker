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
                <a>Select</a>
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

    const fileList: FileItem = uploadedFileList.map((i: any, index: number) => ({
            key: index,
            fileName: i.title
        }));


    return (
        <Skeleton loading={loading} active>
            <Table<FileItem>
                style={{width: 400}}
                columns={columns}
                dataSource={[fileList]}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
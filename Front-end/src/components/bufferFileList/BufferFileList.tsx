import React from "react";
import { Button, Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { deleteBufferFile } from "../../redux/bufferFileList/slice";

interface bufferFileItem {
    index: number;
    fileId: string;
    userName: string;
    fileName: string;
}


interface PropsType {
    loading: boolean;
    bufferFileList: BufferFile[] | null;
}

export const BufferFileList: React.FC<PropsType> = ({
                                                        loading,
                                                        bufferFileList
                                                    }) => {

    const dispatch = useReduxDispatch();
    const jwtToken = useReduxSelector(s => s.authentication.jwtToken);
    const onDelete = (fileId: string) => {
        dispatch(deleteBufferFile({jwtToken, fileId}))
    };
    const columns: ColumnsType<bufferFileItem> = [
        {
            title: "User Name",
            dataIndex: "userName",
            key: "userName"
        },
        {
            title: "File Name",
            dataIndex: "fileName",
            key: "fileName"
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={() => onDelete(record.fileId)}>Delete</button>
                </Space>
            )
        }
    ];

    const bufferFileData: bufferFileItem[] = bufferFileList
        ? (bufferFileList.map((b, index) => ({
            index: index,
            fileId: b.fileId,
            fileName: b.fileName,
            userName: b.userName
        }))) : [];

    return (
        <Skeleton loading={loading} active>
            <Table<bufferFileItem>
                columns={columns}
                dataSource={bufferFileData}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
};
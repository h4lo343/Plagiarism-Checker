import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useParams } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { deleteBufferFile, getBufferFileList } from "../../redux/bufferFileList/slice";

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
    const { subjectCode, assignmentName } = useParams();
    const onDelete = (fileId: string) => {
        dispatch(deleteBufferFile({ jwtToken, fileId }));
        setTimeout(() => {
            dispatch(getBufferFileList({ jwtToken, subjectCode, assignmentName }));
        }, 1200)

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
            fileId: b._id,
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
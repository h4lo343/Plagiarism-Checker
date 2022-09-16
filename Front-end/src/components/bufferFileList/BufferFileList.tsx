import React from "react";
import { Skeleton, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface bufferFileItem {
    index: number;
    userName: string;
    fileName: string;
    subjectCode: string;
    assignmentName: string;
}

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
        title: "Subject Code",
        dataIndex: "subjectCode",
        key: "subjectCode"
    },
    {
        title: "Assignment Name",
        dataIndex: "assignmentName",
        key: "assignmentName"
    }
];

interface PropsType {
    loading: boolean;
    bufferFileList: BufferFile[] | null;
}

export const BufferFileList: React.FC<PropsType> = ({
                                                        loading,
                                                        bufferFileList
                                                    }) => {


    const bufferFileData: bufferFileItem[] = bufferFileList
        ? (bufferFileList.map((b, index) => ({
            index: index,
            subjectCode: b.subjectCode,
            assignmentName: b.assignmentName,
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
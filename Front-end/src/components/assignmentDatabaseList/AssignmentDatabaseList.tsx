import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {Link} from "react-router-dom";

interface DatabaseItem {
    databaseId: number;
    assignmentId: number;
    semester: string;
    subjectId: string;
    subjectName: string;
    assignmentName: string;
}

const columns: ColumnsType<DatabaseItem> = [
    {
        title: "database ID",
        dataIndex: "databaseId",
        key: "databaseId",
    },
    {
        title: "Semester",
        dataIndex: "semester",
        key: "semester",
    },
    {
        title: "Assignment Name",
        dataIndex: "assignmentName",
        key: "assignmentName",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>select</a>
            </Space>
        ),
    }
];

interface PropsType {
    loading: boolean;
    assignmentDatabaseList: any;
}

export const AssignmentDatabaseList: React.FC<PropsType> = ({
                                                               loading,
                                                               assignmentDatabaseList,
                                                           }) => {


    return (
        <Skeleton loading={loading} active>
            <Table<DatabaseItem>
                style={{width: 400}}
                columns={columns}
                dataSource={assignmentDatabaseList}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
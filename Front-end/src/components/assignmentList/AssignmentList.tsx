import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';

interface AssignmentItem {
    subjectId: string;
    subjectName: string;
    assignmentName: string;
}

const columns: ColumnsType<AssignmentItem> = [
    {
        title: "Subject Id",
        dataIndex: "subjectId",
        key: "subjectId",
    },
    {
        title: "Subject Name",
        dataIndex: "subjectName",
        key: "subjectName",
    },
    {
        title: "Assignment Name",
        dataIndex: "assignmentName",
        key: "assignmentName",
    },
    {
        title: "Manage",
        key: "manage",
        render: (_, record) => (
            <Space size="middle">
                <a href={"assignment"}>Delete {record.assignmentName}</a>
            </Space>
        ),
    },
];

interface PropsType {
    loading: boolean;
    assignments: any;
}

export const AssignmentList: React.FC<PropsType> = ({
                                                        loading,
                                                        assignments,
                                                    }) => {


    return (
        <Skeleton loading={loading} active>
        <Table<AssignmentItem>
            columns={columns}
            dataSource={assignments}
            showHeader={true}
            size="small"
            bordered={false}
            pagination={false}
        />
        </Skeleton>
    );
}
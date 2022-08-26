import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';

interface AssignmentItem {
    semester: string;
    subjectId: string;
    subjectName: string;
    assignmentName: string;
    createDate: string;
    dueDate: string;
}

const columns: ColumnsType<AssignmentItem> = [
    {
        title: "Semester",
        dataIndex: "semester",
        key: "semester",
    },
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
        title: "Create Date",
        dataIndex: "createDate",
        key: "createDate",
    },
    {
        title: "Due Date",
        dataIndex: "dueDate",
        key: "dueDate",
    },
    {
        title: "Manage",
        key: "manage",
        render: (_) => (
            <Space size="middle">
                <a href={"assignment"}>View</a>
                <a href={"assignment"}>Delete</a>
            </Space>
        ),
    }
];

interface PropsType {
    loading: boolean;
    assignments: any;
}

export const AssignmentListTeacher: React.FC<PropsType> = ({
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
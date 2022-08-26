import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {Link} from "react-router-dom";

interface AssignmentItem {
    assignmentId: number;
    semester: string;
    subjectId: string;
    subjectName: string;
    assignmentName: string;
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
        title: "Due Date",
        dataIndex: "dueDate",
        key: "dueDate",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`detail/${record.assignmentId}`} replace={true}>Enter</Link>
            </Space>
        ),
    }
];

interface PropsType {
    loading: boolean;
    assignments: any;
}

export const AssignmentListStudent: React.FC<PropsType> = ({
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
                
            />
        </Skeleton>
    );
}
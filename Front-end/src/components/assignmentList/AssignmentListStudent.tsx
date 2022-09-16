import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

const columns: ColumnsType<AssignmentData> = [
    {
        title: "Subject Code",
        dataIndex: "subjectCode",
        key: "subjectCode"
    },
    {
        title: "Assignment Name",
        dataIndex: "assignmentName",
        key: "assignmentName"
    },
    {
        title: "Due date",
        dataIndex: "dueDate",
        key: "dueDate"
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`detail/${record.assignmentName}`} replace={true}>Enter</Link>
            </Space>
        )
    }
];

interface AssignmentData {
    index: number;
    subjectCode: string;
    assignmentName: string;
    dueDate: string;
}

interface PropsType {
    loading: boolean;
    assignmentList: Assignment[] | null;
}

export const AssignmentListStudent: React.FC<PropsType> = ({
                                                               loading,
                                                               assignmentList
                                                           }) => {

    const assignmentData: AssignmentData[] = assignmentList
        ? (assignmentList.map((a, index) => ({
            index: index,
            subjectCode: a.subjectCode,
            assignmentName: a.assignmentName,
            dueDate: a.dueDate
        }))) : [];

    return (
        <Skeleton loading={loading} active>
            <Table<AssignmentData>
                columns={columns}
                dataSource={assignmentData}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
};
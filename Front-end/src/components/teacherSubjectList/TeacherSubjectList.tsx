import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";


const columns: ColumnsType<Subject> = [
    {
        title: "SubjectID",
        dataIndex: "subjectCode",
        key: "subjectId"
    },
    {
        title: "Subject Name",
        dataIndex: "subjectName",
        key: "subjectName"
    },
    {
        title: "Professor",
        dataIndex: "professor",
        key: "professor"
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`${record.subjectCode}`} replace={true}>Manage Assignment</Link>
            </Space>
        )
    }
];

interface PropsType {
    loading: boolean,
    SubjectList: any | null
}

export const TeacherSubjectList: React.FC<PropsType> = ({
                                                            loading,
                                                            SubjectList
                                                        }) => {


    return (
        <Skeleton loading={loading} active>
            <Table
                columns={columns}
                dataSource={SubjectList}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
};
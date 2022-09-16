import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";

interface SubjectItem {
  subjectId: string,
  subjectName: string,
  professor: string[]

}


const columns: ColumnsType<SubjectItem> = [
  {
    title: "SubjectID",
    dataIndex: "subjectId",
    key: "subjectId",
  },
  {
    title: "Subject Name",
    dataIndex: "subjectName",
    key: "subjectName",
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
        <Link to={`${record.subjectId}`} replace={true}>Manage Assignment</Link>
      </Space>
    ),
  }
];

interface PropsType {
  loading: boolean,
  SubjectList: any
}

export const TeacherSubjectList: React.FC<PropsType> = ({
  loading,
  SubjectList,
}) => {


  return (
    <Skeleton loading={loading} active>
      <Table<SubjectItem>
        columns={columns}
        dataSource={SubjectList}
        showHeader={true}
        size="small"
        bordered={false}
      />
    </Skeleton>
  );
}
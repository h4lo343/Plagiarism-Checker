import React from "react";
import {Skeleton, Space, Table, Pagination} from "antd";
import type {ColumnsType} from 'antd/es/table';
import Item from "antd/lib/list/Item";
import { Link } from "react-router-dom";

interface AssignmentItem {
    subjectId: string;
    subjectName: string;
    assignmentName: string;
    assignmentID:number;
}



const columns: ColumnsType<AssignmentItem> = [
    {
        title: "Assignment ID",
        dataIndex: "assignmentID",
        key: "assignmentID",
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
        title: "Manage",
        key: "delete",
        render: (_, record) => (
            <Space size="middle">
                <a href={"#"}>Delete</a>
            </Space>
        ),
    },
    {
      title: "Manage",
      key: "enter",
      render: 
          (_, record) => (
          <Space size="middle">
              <Link to={`/teacherHome/detail/${record.assignmentID}`} replace={true}>Enter</Link>
          </Space>
      ),
  }
];

interface PropsType {
    loading: boolean;
    assignments: any;
}

export const AssignmentList: React.FC<PropsType> = ({loading, assignments}) => {

  

    return (
        <Skeleton loading={loading} active>
        <Table<AssignmentItem>
            columns={columns}
            dataSource={assignments}
            showHeader={true}
            size="small"
            bordered={true}
            
            
        />
        </Skeleton>
    );
}
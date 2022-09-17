import React from "react";
import { Skeleton, Space, Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";

interface AssignmentItem {
  assignmentID: string,
  similarity: number,
  submitTime: string,
  fileName: string
}

const columns: ColumnsType<AssignmentItem> = [
  {
    title: "AssignmentId",
    dataIndex: "assignmentID",
    key: "assignmentID",
  },
  {
    title: "File Name",
    dataIndex: "fileName",
    key: "fileName",
  },

  {
    title: "Submit Time",
    dataIndex: "submitTime",
    key: "submitTime",
  },
  {
    title: "Similarity",
    dataIndex: "similarity",
    key: "similarity",
  },


];

interface PropsType {
  loading: boolean;
  assignmentList: any;
}

export const ResultList: React.FC<PropsType> = ({
  loading,
  assignmentList,
}) => {


  return (
    <Skeleton loading={loading} active>
      <Table<AssignmentItem>
        columns={columns}
        dataSource={assignmentList}
        showHeader={true}
        size="small"
        bordered={false}
      />
    </Skeleton>
  );
}
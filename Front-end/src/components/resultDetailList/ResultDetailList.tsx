import React from "react";
import {Skeleton, Space, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {Link} from "react-router-dom";

interface ResultItem {
    submissionID: number,
    File: string,
    uploadTime: string,
    similarity: string,
    PorF: "fail" | "pass"

}

const columns: ColumnsType<ResultItem> = [
    {
        title: "SubmissionID",
        dataIndex: "submissionID",
        key: "submissionID",
    },
    {
        title: "File",
        dataIndex: "file",
        key: "file",
    },
    {
        title: "Upload Time",
        dataIndex: "uploadTime",
        key: "uploadTime",
    },
    {
        title: "Similarity",
        dataIndex: "similarity",
        key: "similarity",
    },
    {
      title: "P/F",
      dataIndex: "PorF",
      key: "PorF",
  },
     
];

interface PropsType {
    loading: boolean;
    resultData: any;
}

export const ResultDetailList: React.FC<PropsType> = ({
                                                               loading,
                                                               resultData,
                                                           }) => {


    return (
        <Skeleton loading={loading} active>
            <Table<ResultItem>
                columns={columns}
                dataSource={resultData}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
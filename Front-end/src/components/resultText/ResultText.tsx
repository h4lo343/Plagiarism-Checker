import React from "react";
import {Skeleton, Table} from "antd";
import type {ColumnsType} from 'antd/es/table';

interface ResultText {
    resultText: string;
}

const columns: ColumnsType<ResultText> = [
    {
        title: "Result Text",
        dataIndex: "resultText",
        key: "resultText",
    }
];

interface PropsType {
    loading: boolean;
    resultText: any;
}

export const ResultText: React.FC<PropsType> = ({
                                                    loading,
                                                    resultText,
                                                }) => {


    return (
        <Skeleton loading={loading} active>
            <Table<ResultText>
                columns={columns}
                dataSource={resultText}
                showHeader={true}
                size="small"
                bordered={false}
            />
        </Skeleton>
    );
}
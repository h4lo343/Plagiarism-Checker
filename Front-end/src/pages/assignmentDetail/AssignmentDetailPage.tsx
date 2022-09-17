import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AssignmentDatabaseList, UploadBox, UploadedFileList } from "../../components";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { getUploadedFileList } from "../../redux/uploadedFileList/slice";
import { mockFileList, mockDatabaseList } from "./mock";
import styles from "./AssignmentDetailPage.module.css";
import { Button, Col, Row, Upload, Select } from "antd";
import { getResult } from "../../redux/result/slice";
import { BufferFileList } from "../../components/bufferFileList/BufferFileList";
import { getBufferFileList } from "../../redux/bufferFileList/slice";
import { HttpRequestHeader } from "antd/es/upload/interface";
import axios from "axios";

export const AssignmentDetailPage: React.FC = () => {
    const { Option } = Select;
    const navigate = useNavigate();

    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken) as string;
    const uploadedFileList = useReduxSelector((s) => s.uploadedFileList.fileList);

    const resultLoading = useReduxSelector((s) => s.result.loading);
    const bufferFileLoading = useReduxSelector((s) => s.bufferFileList.loading);
    const bufferFileList = useReduxSelector((s) => s.bufferFileList.bufferFileList);
    //const resultDetail = useReduxSelector((s) => s.result.resultDetail);
    const { subjectCode, assignmentName } = useParams();
    const [fileType, setFileType] = useState("");

    const dispatch = useReduxDispatch();
    useEffect(() => {
        PubSub.publish("title", assignmentName);
        if (jwtToken) {
            dispatch(getBufferFileList({ jwtToken, subjectCode, assignmentName }));
        }
    }, [dispatch, jwtToken]);

    const onChange = (value: string) => {
        setFileType(value);
    };

    const check = async () => {
        const reply = await axios.post(`http://localhost:8888/check/postCheckConfig`,
            {
                subjectCode: subjectCode,
                assignment: assignmentName,
                dataType: fileType,
                datasets: "dataset1"
            },
            {
                headers: {
                    token: jwtToken
                }
            }
        );
    };


    return (
        <div>
            <Row>
                <Col span={9} className={styles["database-list"]}>
                    {/*<UploadedFileList uploadedFileList={resultDetail} />*/}
                    <BufferFileList loading={bufferFileLoading} bufferFileList={bufferFileList} />
                    <div className={styles.button}>
                        <UploadBox />
                    </div>
                </Col>
                <Col span={9} className={styles["database-list"]}>
                    <AssignmentDatabaseList
                        loading={false}
                        assignmentDatabaseList={mockDatabaseList}
                    />
                    <Select
                        style={{ width: 170, marginRight: 15 }}
                        showSearch
                        placeholder="Select a file type to check"
                        onChange={onChange}
                        optionFilterProp="type"
                        filterOption={(input, option) =>
                            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        <Option value="pdf" key={1}>Pdf</Option>
                        <Option value="docx" key={2}>Docx</Option>
                        <Option value="java" key={3}>Java</Option>
                        <Option value="c" key={4}>C</Option>
                    </Select>

                    <Button onClick={check}>
                        Check
                    </Button>
                </Col>
            </Row>


        </div>
    );
};
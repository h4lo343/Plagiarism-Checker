import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AssignmentDatabaseList, UploadBox, UploadedFileList} from "../../components";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getUploadedFileList} from "../../redux/uploadedFileList/slice";
import {mockFileList, mockDatabaseList} from "./mock";
import styles from "./AssignmentDetailPage.module.css";
import {Button, Col, Row} from "antd";
import {getResult} from "../../redux/result/slice";

export const AssignmentDetailPage: React.FC = () => {
    const {asID} = useParams()
    const navigate = useNavigate();
    /*
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken) as string;
    const uploadedFileList = useReduxSelector((s) => s.uploadedFileList.fileList);

     */
    const loading = useReduxSelector((s) => s.result.loading);
    const resultDetail = useReduxSelector((s) => s.result.resultDetail);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        PubSub.publish("title", `Assignment-${asID}`);
        dispatch(getResult());
    }, [asID, dispatch, resultDetail])

    return (
        <div>
            <Row>
                <Col span={9} className={styles["database-list"]}>
                    <UploadedFileList uploadedFileList={resultDetail}/>
                    <div className={styles.button}>
                        <UploadBox/>
                    </div>
                </Col>
                <Col span={9} className={styles["database-list"]}>
                    <AssignmentDatabaseList
                        loading={false}
                        assignmentDatabaseList={mockDatabaseList}
                    />
                    <div className={styles.button}>
                        <Button
                            style={{
                                width: 100,
                                height: 45,
                                fontSize: "15px",
                                borderRadius: 10
                            }}
                            onClick={() => navigate("/student/result/detail/SCORE%20Sprint%201")}
                        >
                            Check
                        </Button>
                    </div>
                </Col>
            </Row>


        </div>
    )
};
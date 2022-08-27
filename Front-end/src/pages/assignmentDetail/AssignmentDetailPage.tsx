import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {AssignmentDatabaseList, UploadBox, UploadedFileList} from "../../components";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getUploadedFileList} from "../../redux/uploadedFileList/slice";
import {mockFileList, mockDatabaseList} from "./mock";
import styles from "./AssignmentDetailPage.module.css";
import {Col, Row} from "antd";

export const AssignmentDetailPage: React.FC = () => {
    const {asID} = useParams()
    /*
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken) as string;
    const uploadedFileList = useReduxSelector((s) => s.uploadedFileList.fileList);
    const dispatch = useReduxDispatch();
     */

    useEffect(() => {
        PubSub.publish("title", `Assignment-${asID}`);
        /*
        dispatch(getUploadedFileList(jwtToken));
         */
    }, [asID/*, dispatch, jwtToken*/])

    return (
        <div>
            <Row>
                <Col span={12}>
                    <AssignmentDatabaseList loading={false} assignmentDatabaseList={mockDatabaseList}/>
                </Col>
                <Col span={12}>
                    <UploadedFileList loading={false} uploadedFileList={mockFileList}/>
                </Col>
            </Row>

            {asID}
            <div className={styles["upload-box"]}>
                <UploadBox/>
            </div>
        </div>
    )
};
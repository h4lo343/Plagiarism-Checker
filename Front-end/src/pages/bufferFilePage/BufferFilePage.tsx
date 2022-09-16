import React, { useEffect } from "react";
import styles from "./BufferFilePage.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { Spin } from "antd";
import { getBufferFileList } from "../../redux/bufferFileList/slice";
import { BufferFileList } from "../../components/bufferFileList/BufferFileList";

export const BufferFilePage = () => {

    useEffect(() => {
        PubSub.publish("title", `Assignment`);
    }, []);

    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.bufferFileList.loading);
    const error = useReduxSelector((s) => s.bufferFileList.error);
    const bufferFileList = useReduxSelector((s) => s.bufferFileList.bufferFileList);

    const dispatch = useReduxDispatch();
    const subjectCode = "COMP30001";
    const assignmentName = ""
    useEffect(() => {
        if (jwtToken) {
            dispatch(getBufferFileList({jwtToken, subjectCode, assignmentName}));
        }
    }, [dispatch, jwtToken, bufferFileList]);


    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                }}
            />
        );
    }

    if (error) {
        return <div>error：{error}</div>;
    }


    return (
        <div className={styles["assign-container"]}>
            <div className={styles["teacherAssignTable-container"]}>
                <BufferFileList loading={loading} bufferFileList={bufferFileList} />
            </div>
        </div>
    );
};
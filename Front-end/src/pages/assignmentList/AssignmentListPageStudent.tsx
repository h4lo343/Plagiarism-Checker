import React, {useEffect} from "react";
import {AssignmentListStudent} from '../../components';
import styles from './AssignmentListPage.module.css'
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getAssignmentList} from "../../redux/assignmentList/slice";
import {Spin} from "antd";
import {mockAssignmentList as mockData} from "./mock";

const mockAssignmentList = mockData;

export const AssignmentListPageStudent = () => {
    /*
    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.assignmentList.loading);
    const error = useReduxSelector((s) => s.assignmentList.error);
    const assignmentList = useReduxSelector((s) => s.assignmentList.assignmentList);

    const dispatch = useReduxDispatch();

    useEffect(() => {
        if (jwtToken) {
            dispatch(getAssignmentList(jwtToken));
        }
    }, [dispatch, jwtToken])


    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }

    if (error) {
        return <div>error：{error}</div>;
    }
    */

    return (
        <div className={styles['assign-container']}>
            <div className={styles['teacherAssignTable-container']}>
                <AssignmentListStudent loading={false} assignments={mockAssignmentList}/>
            </div>
        </div>
    )
}
import React, {useEffect} from "react";
import {AssignmentListStudent} from '../../components';
import styles from './AssignmentListPage.module.css'
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getAssignmentList} from "../../redux/assignmentList/slice";
import {Spin} from "antd";

const mockAssignmentList = [{
    assignmentId: 1,
    semester: "S2 2023",
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 1",
    createDate: new Date(2022, 7, 1).toDateString(),
    dueDate: new Date(2022, 7, 22).toDateString()
}, {
    assignmentId: 2,
    semester: "S2 2023",
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 2",
    createDate: new Date(2022, 7, 29).toDateString(),
    dueDate: new Date(2022, 8, 20).toDateString()
}];

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
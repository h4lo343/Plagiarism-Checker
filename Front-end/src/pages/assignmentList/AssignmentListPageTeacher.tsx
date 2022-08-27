import React, { useEffect } from "react";
import {AssignmentListTeacher} from '../../components';
import styles from './AssignmentListPage.module.css'
import {AssignmentAdder} from "../../components/assignmentAdder";
import {mockAssignmentList as mockData} from "./mock";

const mockAssignments = mockData;

export const AssignmentListPageTeacher = () => {
  useEffect(()=>{
    PubSub.publish("title", "Assignment")
  })
  return (
    <div className={styles['assign-container']}>
      <div className={styles['teacherAssignTable-container']}>
          <AssignmentListTeacher loading={false} assignmentList={mockAssignments}/>
          <AssignmentAdder/>
      </div>
    </div>
  )
}
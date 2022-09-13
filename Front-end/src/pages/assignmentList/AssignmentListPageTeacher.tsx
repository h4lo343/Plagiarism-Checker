import React, { useEffect } from "react";
import { AssignmentListTeacher } from '../../components';
import styles from './AssignmentListPage.module.css'

import { mockAssignmentList as mockData } from "./mock";



export const AssignmentListPageTeacher = () => {
  useEffect(() => {
    PubSub.publish("title", "Total Assignment")
  })
  return (
    <div className={styles['assign-container']}>
      <div className={styles['teacherAssignTable-container']}>
        <AssignmentListTeacher loading={false} assignmentList={mockData} />
      </div>
    </div>
  )
}
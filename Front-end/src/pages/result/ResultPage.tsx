import React, { useEffect } from "react";
import styles from './ResultPage.module.css'
import {mockAssignmentList as mockData} from "./mock";
import { ResultList } from "../../components";

const mockAssignments = mockData;

export const ResultPage = () => {
  useEffect(()=>{
    PubSub.publish("title", "Result")
  })
    return (  
      <div className={styles['assign-container']}>
          <div className={styles['teacherAssignTable-container']}>
           <ResultList loading={false} assignmentList={mockAssignments}/>
         </div>
     </div>
       
    )
};
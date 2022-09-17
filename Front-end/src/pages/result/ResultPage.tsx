import React, { useEffect, useState } from "react";
import styles from "./ResultPage.module.css";
import { mockAssignmentList as mockData } from "./mock";
import { ResultList } from "../../components";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import axios from "axios";

const mockAssignments = mockData;

export const ResultPage = () => {
  const jwtToken = useReduxSelector((s) => s.authentication.jwtToken) as string;
  const [ResultListt, setResultListt] = useState([])
  let data:any
  let list:any
    useEffect( () => {
        PubSub.publish("title", "Result");
    });
    axios.get(`http://localhost:8888/result/get-result-list`, {
          headers: {
            token: jwtToken
          }
        } ).then((response) => {
          data = response.data
          const list = data.map((item:any)=> {
            return {
              assignmentID: item._id,
              fileName: item.fileName,
              submitTime: item.when,
              similarity: item.similarity,
               
            }
          })
         setResultListt(list)
          
        })
         
    
    return (
        <div className={styles["assign-container"]}>
            <div className={styles["teacherAssignTable-container"]}>
                <ResultList loading={false} assignmentList={ResultListt} />
            </div>
        </div>
    );
};
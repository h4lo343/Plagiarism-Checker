import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import {ResultDetailList} from "../../components/resultDetailList"
import { mockResultDetail } from "./mock"

export const ResultDetail:React.FC = () => {
  const {resID} = useParams()

  useEffect(() => {
    PubSub.publish("title", `Result for ${resID}`);
    /*
    dispatch(getUploadedFileList(jwtToken));
     */
}, [])

  return (
    <ResultDetailList loading={false} resultData={mockResultDetail}/>
  )
}
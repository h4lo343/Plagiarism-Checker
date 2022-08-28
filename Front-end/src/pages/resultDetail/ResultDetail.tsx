import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResultDetailList, ResultText} from "../../components";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getResult} from "../../redux/result/slice";
import {getResultText} from "../../redux/resultText/slice";
import {mockResultDetail} from "./mock"
import styles from "./ResultDetail.module.css"


export const ResultDetail: React.FC = () => {
    const {resID} = useParams();
    const dispatch = useReduxDispatch();
    const loading = useReduxSelector((s) => s.result.loading);
    const resultDetail = useReduxSelector((s) => s.result.resultDetail);
    const resultText = useReduxSelector((s) => s.resultText);

    const data = resultDetail.similarity

    useEffect(() => {
        PubSub.publish("title", `Result`);
        dispatch(getResult());
        dispatch(getResultText());
    }, [])

    return (
        <div className={styles['similarity']}>
            similarity for your assignment: {data}
        </div>
    )
}
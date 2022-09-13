import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResultDetailList, ResultText} from "../../components";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getResult} from "../../redux/result/slice";
import {getResultText} from "../../redux/resultText/slice";
import {mockResultDetail} from "./mock"
import styles from "./StudentResultDetailPage.module.css"
import {ResultStudent} from "../../components/resultDetailList/ResultStudent";
import {Col, Row} from "antd";


export const StudentResultDetailPage: React.FC = () => {
    const {resID} = useParams();
    const dispatch = useReduxDispatch();
    const loading = useReduxSelector((s) => s.result.loading);
    const resultDetail = useReduxSelector((s) => s.result.resultDetail);

    const resultText = resultDetail.text

    useEffect(() => {
        PubSub.publish("title", `Result`);
        dispatch(getResult());
        dispatch(getResultText());
    }, [])

    return (
        <Row>
            <Col span={12}>
                <ResultStudent resultDetail={resultDetail}/>
            </Col>
            <Col span={12}>
                <ResultText resultText={resultText}/>
            </Col>
        </Row>
    )
}
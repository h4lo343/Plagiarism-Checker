import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {ResultDetailList, ResultText} from "../../components";
import {useReduxDispatch, useReduxSelector} from "../../redux/hooks";
import {getResult} from "../../redux/result/slice";
import {getResultText} from "../../redux/resultText/slice";

export const ResultDetail: React.FC = () => {
    const {resID} = useParams();
    const dispatch = useReduxDispatch();
    const JWT = "mock";
    const resultDetail = useReduxSelector((s) => s.result.resultDetail);
    const resultText = useReduxSelector((s) => s.resultText);


    useEffect(() => {
        PubSub.publish("title", `Result for ${resID}`);
        dispatch(getResult(JWT));
        dispatch(getResultText(JWT));
    }, [JWT])

    return (
        <>
            <ResultDetailList loading={false} resultDetail={resultDetail}/>
        </>
    )
}
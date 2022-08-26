import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {UploadBox} from "../../components";

export const AssignDetailStudent = () => {

    useEffect(() => {
        PubSub.publish("title", `Assignment-${asID}`)
    }, [])

    const {asID} = useParams()
    return (
        <div>
            {asID}
            <UploadBox/>
        </div>
    )
}
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {UploadBox} from "../../components";

export const PlagiarismCheckPage: React.FC = () => {
    const {asID} = useParams()

    useEffect(() => {
        PubSub.publish("title", `Assignment-${asID}`)
    }, [asID])


    return (
        <div>
            {asID}
            <UploadBox/>
        </div>
    )
}
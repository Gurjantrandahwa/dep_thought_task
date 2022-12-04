import React from "react";
import "./Task-heading-1.css";
import {data} from "../../Common/Data";
import {FaChevronDown} from "react-icons/fa";

export default function TaskHeading1() {
    const handleOpen = () => {

    }
    return <div className={"task-heading-1"}>
        <p className={"task-heading-header"}>{data.tasks[0].assets[0].asset_title}</p>
        <p className={"task-heading-1-description"}>{data.description}</p>

        <div className={"down-arrow"}>
            <FaChevronDown onClick={handleOpen}/>
        </div>

    </div>
}

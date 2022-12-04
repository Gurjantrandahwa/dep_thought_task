import React from "react";
import "./Headings.css";
import {data} from "../Common/Data";
import TaskHeading1 from "../Task headings/Task-heading-1/Task-heading-1";
import TaskHeading2 from "../Task headings/Task-heading-2/Task-heading-2";

export default function Headings() {
    console.log(data)
    return <div className={"heading"}>

        <p className={"heading-challenge"}>You Are Taking challenge of new Project</p>
        <div className={"heading-wrapper"}>

            <TaskHeading1/>
            <TaskHeading2/>
        </div>

    </div>
}
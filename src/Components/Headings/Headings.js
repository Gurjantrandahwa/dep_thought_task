import React from "react";
import "./Headings.css";
import {data} from "../Common/Data";

export default function Headings() {
console.log(data)
    return <div className={"heading"}>

        {data.tasks[0].assets[3].display_asset_docs}
    </div>
}
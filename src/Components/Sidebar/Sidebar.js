import "./Sidebar.css";

import {useState} from "react";
import {data} from "../Common/Data";
import {VscThreeBars} from "react-icons/vsc";

export default function Sidebar() {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return <div className={"sidebar"}
                style={open ? {width: "96px"} : {width: "200px"}}
    >
        <div className={"bar-icon"}

        >
            <div style={open ? {display: "none"} : {display: "block"}}>
                <h6>Journey Board</h6>
            </div>
            <VscThreeBars onClick={handleClick}/>
        </div>
        <div style={open ? {display: "none"} : {display: "block"}}
             className={"sidebar-heading"}>

<h4>1. Demo task</h4>
            <ul>
                <li className={"menu-item"}>{data.tasks[0].assets[0].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[1].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[2].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[3].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[4].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[5].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[6].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[7].asset_title}</li>
                <li className={"menu-item"}>{data.tasks[0].assets[8].asset_title}</li>
            </ul>


        </div>


    </div>
}
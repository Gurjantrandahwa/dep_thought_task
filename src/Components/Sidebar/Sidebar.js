import React, {useState} from "react";
import "./Sidebar.css";
import {VscThreeBars} from "react-icons/vsc";
import {Link} from "@mui/material";
import {IconContext} from "react-icons";

export default function Sidebar() {

    const sidebarData = [
        {
            title: "Assignment1",

        },
        {
            title: "Assignment1",

        },
        {
            title: "Assignment1",

        },
        {
            title: "Assignment1",

        },


    ]
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
    return <div className={"sidebar"}>
        <IconContext.Provider value={{color: "black"}}>
            <div className={"navbar"}>
                <div  className={"menu-bars"}>
                    <VscThreeBars style={{margin: "5px"}} size={18} onClick={showSidebar}/>
                </div>
            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <Link to={"#"} className={"menu-bars"}>
                    <VscThreeBars  size={18} onClick={showSidebar}/>
                </Link>
                <ul className={"nav-menu-items"} onClick={showSidebar}>
                    {
                        sidebarData.map((value, index) => {
                            return <li key={index} className={"nav-text"}>
                                {value.title}
                            </li>
                        })
                    }
                </ul>
            </nav>
        </IconContext.Provider>

    </div>
}
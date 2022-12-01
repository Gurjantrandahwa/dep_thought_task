import React from "react";
import "./Header.css";
import {FaHome, FaTools} from "react-icons/fa";
import {Avatar} from "@mui/material";
import {TbDotsVertical} from "react-icons/tb";
import {IoMdNotifications} from "react-icons/io";

export default function Header() {
    return <div className={"header"}>
        <div>
            <img src={"https://deepthought.education/assets/images/logo/logo.svg"} alt={""}/>
        </div>
        <div className={"icon-wrapper"}>
            {
                [
                    {
                        icon: <FaHome/>
                    },

                    {
                        icon: <FaTools/>
                    },
                    {
                        icon: <IoMdNotifications/>
                    },

                ].map((value, index) => {
                    return <div key={index} className={"single-icon"}>
                        {value.icon}
                    </div>
                })

            }
            <Avatar sx={{width:"40px",height:"40px",marginLeft:"20px",marginRight:"20px",color:"#3683F0",backgroundColor:"white",fontWeight:"700"}}
                    src={"https://deepthought.education/assets/images/logo/logo.sv"}

                    alt={"DT"}/>
            <TbDotsVertical color={"#3683F0"}/>
        </div>
    </div>
}
import "./Sidebar.css";

import {useState} from "react";
import {GrMenu} from "react-icons/gr";
import {motion} from "framer-motion";
import {data} from "../Common/Data";

export default function Sidebar() {
    const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    return <>
        <div className={"bar-icon"} style={open ? {left: "25%", position: ""} : {left: "0"}}
             onClick={() => setOpen(!open)}>
            <GrMenu color={"white"}/>
        </div>

        <motion.div
            variants={sidebarVariants}
            animate={window.innerWidth <= 1968 ? `${open}` : ''}
            className={"sidebar"}>


            <div className={"menu"}>


                <div>
                    <li className={"menu-item"}>{data.tasks[0].assets.asset_title}</li>

                </div>


            </div>
        </motion.div>
    </>
}
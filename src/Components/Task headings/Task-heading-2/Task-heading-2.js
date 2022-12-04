import React, {useState} from "react";
import "./Task-heading-2.css";
import {data} from "../../Common/Data";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {BsFillLightbulbFill, BsLink} from "react-icons/bs";
import {MdMessage} from "react-icons/md";
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {AiOutlineEdit} from "react-icons/ai";
import {CiFloppyDisk} from "react-icons/ci";


export default function TaskHeading2() {
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return <div className={"task-heading-2"}>
        <p className={"task-heading-header"}>{data.tasks[0].assets[1].asset_title}</p>
        <div className={"thread-A"}>
            <FaChevronUp/>
            <p>Thread a</p>
        </div>
        <div className={"input-container"}>

            <div>
                <label>Sub Thread 1</label>
                <input type={"text"}
                       placeholder={"Enter Text Here"}
                />
            </div>
            <div>
                <label>Sub Interpretation</label>
                <input type={"text"}
                       placeholder={"Enter Text Here"}/>
            </div>

        </div>
        <div className={"select-options"}>
            <div>
                <BsFillLightbulbFill/>
                <MdMessage/>
            </div>

            <div className={"box-wrapper"}>
                <Box sx={{
                    width: 160,
                    marginLeft: "10px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem category={1}>Category 1</MenuItem>
                            <MenuItem category={2}>Category 2</MenuItem>
                            <MenuItem category={3}>Category 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{
                    width: 160,
                    marginLeft: "10px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
                }}>
                    <FormControl fullWidth>
                        <InputLabel>Select Process</InputLabel>
                        <Select
                            // labelId="demo-simple-select-label"
                            // id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem category={1}>Process 1</MenuItem>
                            <MenuItem category={2}>Process 2</MenuItem>
                            <MenuItem category={3}>Process 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </div>

        </div>
        <div>
            <Button sx={
                {
                    backgroundColor: "blue",
                    textTransform: "none",
                    margin: "30px",
                    borderRadius: "10px",
                    fontSize: "16px"
                }
            }
                    variant="contained" startIcon={"+"}>
                Sub thread
            </Button>
        </div>
        <div className={"summary"}>
            <p>Summary for Thread A</p>
            <input type={"text"}
                   placeholder={"Enter Text Here"}/>
        </div>
        <div className={"thread-credit-wrapper"}>
            <div>
                <p><BsLink/> Thread Credit <AiOutlineEdit color={"blue"}/></p>

            </div>
            <div>
                <Box sx={{
                    width: 160,
                    borderRadius: "10px",
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Emotion</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem category={1}>Category 1</MenuItem>
                            <MenuItem category={2}>Category 2</MenuItem>
                            <MenuItem category={3}>Category 3</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
        <div className={"thread-btn-wrapper"}>
            <Button sx={
                {
                    backgroundColor: "blue",
                    textTransform: "none",
                    margin: "30px",
                    borderRadius: "10px",
                    fontSize: "16px",

                }
            }
                    variant="contained" startIcon={"+"}>
                New thread
            </Button>

        </div>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "black",
            marginRight: "30px",
            fontSize: "24px",

        }}>
            <CiFloppyDisk/>
        </div>
        <div className={"border"}/>
        <div className={"down-arrow"}>
            <FaChevronDown/>
        </div>
    </div>
}
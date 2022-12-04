import React, {useState} from "react";
import "./Task-heading-2.css";
import {data} from "../../Common/Data";
import {FaChevronUp} from "react-icons/fa";
import {BsFillLightbulbFill} from "react-icons/bs";
import {MdMessage} from "react-icons/md";
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {GrAdd} from "react-icons/gr";

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
            <BsFillLightbulbFill/>
            <MdMessage/>

                <Box sx={{ maxWidth: 180, boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
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
                <Box sx={{ maxWidth: 180, boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <FormControl fullWidth>
                        <InputLabel >Select Process</InputLabel>
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
            <Button sx={
                {
                    backgroundColor:"blue",

                }
            }
                variant="contained" startIcon={<GrAdd />}>
                Delete
            </Button>
        </div>
    </div>
}
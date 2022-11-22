import React from 'react';
import classes from "./settingBar.module.scss";
import toolState from "../../store/ToolState";

const SettingBar = () => {
    return (
        <div className={classes.settingBar}>
            <label htmlFor="line-width" style={{margin: "0 16px"}}>Size line</label>
            <input onChange={e => toolState.setLineWidth(e.target.value)}
                type="number"
                id={"line-width"}
                style={{width: "50px",height:"30px", margin: "0 5px"}}
                defaultValue={1}
                min={1} max={500}/>

            <input onChange={e => toolState.setStrokeColor(e.target.value)}
                   type="color"
                   id={"line-color"}
                   style={{width: "50px",height:"30px", margin: "0 5px"}}/>
        </div>
    );
};

export default SettingBar;
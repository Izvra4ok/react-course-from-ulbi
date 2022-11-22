import React, {useEffect} from 'react';
import classes from "./toolBar.module.scss";
import brush from "../../assets/image/brush.png";
import rect from "../../assets/image/rect.png";
import circle from "../../assets/image/circle.png";
import eraser from "../../assets/image/eraser.png";
import line from "../../assets/image/line.png";
import undo from "../../assets/image/undo.png";
import redo from "../../assets/image/redo.png";
import save from "../../assets/image/save.png";
import canvasState from "../../store/canvasState";
import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";
import ToolState from "../../store/ToolState";


const ToolBar = () => {


    const changeColor = (e) => {
        ToolState.setStrokeColor(e.target.value)
        ToolState.setFillColor(e.target.value)
    }

    useEffect(()=>{

    },[changeColor])

    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL()
        const a = document.createElement("a")
        a.href = dataUrl
        a.download = canvasState.sessionId + ".jpg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }


    return (
        <div className={classes.toolBar}>

            <button className={classes.toolBar__btn}
                    onClick={() => ToolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionId))}>
                <img className={classes.brush} src={brush} alt="brush"/>
            </button>

            <button className={classes.toolBar__btn}
                    onClick={() => ToolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionId))}>
                <img className={classes.rect} src={rect} alt="rect"/>
            </button>

            <button className={classes.toolBar__btn}
                    onClick={() => ToolState.setTool(new Circle(canvasState.canvas, canvasState.socket, canvasState.sessionId))}>
                <img className={classes.circle} src={circle} alt="rect"/>
            </button>

            <button className={classes.toolBar__btn}
                    onClick={() => ToolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.sessionId))}>
                <img className={classes.eraser} src={eraser} alt="eraser"/>
            </button>

            <button className={classes.toolBar__btn}
                    onClick={() => ToolState.setTool(new Line(canvasState.canvas, canvasState.socket, canvasState.sessionId))}>
                <img className={classes.line} src={line} alt="line"/>
            </button>

            <input onChange={e => changeColor(e)} className={classes.toolBar__btn} type="color"/>

            <button className={classes.toolBar__btn} onClick={() => canvasState.undo()}>
                <img className={classes.undo} src={undo} alt="undo"/>
            </button>

            <button className={classes.toolBar__btn} onClick={() => canvasState.redo()}>
                <img className={classes.redo} src={redo} alt="redo"/>
            </button>

            <button className={classes.toolBar__btn} onClick={() => download()}>
                <img className={classes.save} src={save} alt="save"/>
            </button>
        </div>
    );
};

export default ToolBar;
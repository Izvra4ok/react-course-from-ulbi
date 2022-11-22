import React, {useEffect, useRef, useState} from 'react';
import classes from "./canvas.module.scss";
import {observer} from "mobx-react-lite";
import canvasState from "../../store/canvasState";
import toolState from "../../store/ToolState";
import Brush from "../../tools/Brush";
import {Button, Modal} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Rect from "../../tools/Rect";
import axios from "axios";
import Circle from "../../tools/Circle";
import Eraser from "../../tools/Eraser";
import Line from "../../tools/Line";


const Canvas = observer(() => {

    const canvasRef = useRef();
    const userNameRef = useRef();
    const [modal, setModal] = useState(true);
    const params = useParams();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        let context = canvasRef.current.getContext('2d')
        if (params.id) {
            axios.get(`http://localhost:5000/image?id=${params.id}`)
                .then(response => {
                    const img = new Image();
                    img.src = response.data
                    img.onload = () => {
                        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                        context.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
                        context.stroke();
                    }
                })
        }
    }, [])

    const connectionHandler = () => {
        canvasState.setUserName(userNameRef.current.value)
        setModal(false)
    };

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
        axios.post(`http://localhost:5000/image?id=${params.id}`, {img: canvasRef.current.toDataURL()})
            .then(response => {
                console.log(response.data)
            })
    };

    useEffect(() => {
        if (canvasState.userName) {
            const socket = new WebSocket(`ws://localhost:5000/`)
            canvasState.setSocket(socket)
            canvasState.setSessionId(params.id)
            toolState.setTool(new Brush(canvasRef.current, socket, params.id))
            socket.onopen = () => {
                console.log("connection success")
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.userName,
                    method: "connection"
                }))
            }
            socket.onmessage = (event) => {
                let msq = JSON.parse(event.data)
                console.log(msq)
                switch (msq.method) {
                    case "connection":
                        console.log(`User ${msq.username} connectioned`)
                        break
                    case "draw":
                        drawHandler(msq)
                        break
                }
            }
        }
    }, [canvasState.userName])

    const drawHandler = (msq) => {
        const figure = msq.figure
        const context = canvasRef.current.getContext("2d")
        switch (figure.type) {
            case "brush":
                Brush.draw(context, figure.x, figure.y, figure.color, figure.stroke, figure.lineWidth)
                break
            case "rect":
                Rect.staticDraw(context, figure.x, figure.y, figure.width, figure.height, figure.color, figure.stroke, figure.lineWidth)
                break
            case "circle":
                Circle.staticDraw(context, figure.x, figure.y, figure.r, figure.color, figure.stroke, figure.lineWidth)
                break
            case "eraser":
                Eraser.draw(context, figure.x, figure.y, figure.lineWidth)
                break
            case "line":
                Line.staticDraw(context, figure.x, figure.y, figure.color, figure.stroke, figure.lineWidth)
                break
            case "finish":
                context.beginPath()
                break
        }
    }


    return (
        <div className={classes.canvas}>

            <Modal show={modal} onHide={() => {
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>move to src/Lesson4/server/ and enter in terminal npm run dev to start server</p>
                    <input type="text" ref={userNameRef}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectionHandler()}>
                        Enter
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} style={{display: "flex"}} width={1000}
                    height={500}/>
        </div>
    );
});

export default Canvas;
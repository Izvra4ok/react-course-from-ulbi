// import Tool from "./Tools";
// import Brush from "./Brush";
//
// export default class Eraser extends Brush {
//     constructor(canvas,socket,id) {
//         super(canvas,socket,id);
//     }
//
//
//    static draw(x, y) {
//         this.context.strokeStyle = "white"
//         this.context.lineTo(x, y)
//         this.context.stroke()
//     }
// }

import Tool from "./Tools";

export default class Eraser extends Tool {
    constructor(canvas, socket, id) {
        super(canvas, socket, id);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.mouseDown = false
        this.socket.send(JSON.stringify({
            method: "draw",
            id: this.id,
            figure: {
                type: "finish",
            }
        }))

    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.context.beginPath()
        this.context.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
            this.socket.send(JSON.stringify({
                method: "draw",
                id: this.id,
                figure: {
                    type: "eraser",
                    x: e.pageX - e.target.offsetLeft,
                    y: e.pageY - e.target.offsetTop,
                    color: this.context.fillStyle,
                    stroke: this.context.strokeStyle,
                    lineWidth: this.context.lineWidth
                }
            }))
        }
    }

    static draw(context, x, y, lineWidth) {
        // context.fillStyle = "white"
        context.strokeStyle = "white"
        context.lineWidth = lineWidth
        context.lineTo(x, y)
        context.stroke()
    }

}
import Tool from "./Tools";

export default class Rect extends Tool {
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
                type: "rect",
                x: this.startX,
                y: this.startY,
                width: this.width,
                height: this.height,
                color: this.context.fillStyle,
                stroke: this.context.strokeStyle,
                lineWidth: this.context.lineWidth
            }
        }))
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.context.beginPath()
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            this.width = currentX - this.startX;
            this.height = currentY - this.startY;
            this.draw(this.startX, this.startY, this.width, this.height);
        }
    }

    draw(x, y, w, h) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.context.beginPath();
            this.context.rect(x, y, w, h);
            this.context.fill();
            this.context.stroke();
        }

    }

    static staticDraw(context, x, y, w, h, color, stroke,lineWidth) {
        context.fillStyle = color
        context.strokeStyle = stroke
        context.lineWidth = lineWidth
        context.beginPath();
        context.rect(x, y, w, h);
        context.fill();
        context.stroke();
    }

}
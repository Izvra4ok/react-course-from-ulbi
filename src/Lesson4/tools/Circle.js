import Tool from "./Tools";

export default class Circle extends Tool {
    constructor(canvas,socket,id) {
        super(canvas,socket,id);
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
                type: "circle",
                x: this.startX,
                y: this.startY,
                r: this.r,
                color: this.context.fillStyle,
                stroke: this.context.strokeStyle,
                lineWidth: this.context.lineWidth
            }
        }))
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.context.beginPath()
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let curentX = e.pageX - e.target.offsetLeft
            let curentY = e.pageY - e.target.offsetTop
            this.width = curentX - this.startX
            this.height = curentY - this.startY
            this.r = Math.sqrt(this.width ** 2 + this.height ** 2)
            this.draw(this.startX, this.startY, this.r)
        }
    }

    draw(x, y, r) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.context.beginPath()
            this.context.arc(x, y, r, 0, 2 * Math.PI)
            this.context.fill()
            this.context.stroke()
        }
    }

    static staticDraw(context, x, y, r, color, stroke,lineWidth) {
        context.fillStyle = color
        context.strokeStyle = stroke
        context.lineWidth = lineWidth
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
    }

}
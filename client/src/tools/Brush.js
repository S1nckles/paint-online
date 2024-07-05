import { tool } from './tool';

export class Brush extends tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    // listen - слухач подій
    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    // Користувач нажав мишкою
    mouseUpHandler(e) {
        this.mouseDown = false; 
    }
    // Користувач відпустив мишкою
    mouseDownHandler(e) {
        this.mouseDown = true;         
        this.ctx.beginPath();
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
    // Користувач рухає мишкою
    mouseMoveHandler(e) {
        if(this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }

    draw(x, y) {
        this.ctx.lineTo(x,y)
        this.ctx.stroke();
        console.log('Drawe bush');
    }
} 
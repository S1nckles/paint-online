import { tool } from './tool';

debugger;
export class Eraser extends tool {
    constructor(canvas) {
        super(canvas);
        this.listen();
        this.ctx.strokeStyle = 'white'; // Встановлюємо білий колір для ліній
        this.ctx.lineWidth = 10; // Встановлюємо ширину лінії для гумки
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
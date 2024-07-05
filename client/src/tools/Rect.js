import { tool } from './tool';

debugger;
export class Rect extends tool {
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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();
    }
    // Користувач рухає мишкою
    mouseMoveHandler(e) {
        if(this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height)
        }
    }

    draw(x, y, w, h) {
        // img і далі до beginPath робиться для того, щоб квадрат не видавав помилки при малюванні
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x, y, w, h);
            //fill заповнює квадрат краскою
            this.ctx.fill();
            //дає обводку
            this.ctx.stroke();
        }
        
    }
} 
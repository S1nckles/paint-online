import { tool } from './tool';

export class Line extends tool {
    constructor(canvas) {
        super(canvas);
        this.listen();
    }

    // listen - слухач подій
    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    // Користувач нажав мишкою
    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    // Користувач відпустив мишкою
    mouseDownHandler(e) {
        this.mouseDown = true;
        // Початкова точка для лінії
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.saved = this.canvas.toDataURL();
    }

    // Користувач рухає мишкою
    mouseMoveHandler(e) {
        if (this.mouseDown) {
            // Поточні координати миші
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            // Малюємо лінію
            this.draw(currentX, currentY);
        }
    }

    // Метод для малювання лінії
    draw(x, y) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        };
    }
}

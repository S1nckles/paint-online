import { tool } from './tool';

export class Circle extends tool {
    constructor(canvas) {
        super(canvas);
        this.listen(); // Починаємо слухати події
    }

    // Метод для реєстрації слухачів подій
    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this); // Слухач для руху миші
        this.canvas.onmousedown = this.mouseDownHandler.bind(this); // Слухач для натискання миші
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);     // Слухач для відпускання миші
    }

    // Метод обробки події відпускання миші
    mouseUpHandler(e) {
        this.mouseDown = false; // Встановлюємо прапорець mouseDown у false, коли миша відпущена
    }

    // Метод обробки події натискання миші
    mouseDownHandler(e) {
        this.mouseDown = true; // Встановлюємо прапорець mouseDown у true, коли миша натиснута
        this.ctx.beginPath(); // Починаємо новий шлях
        // Зберігаємо початкові координати натискання миші
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        // Зберігаємо поточний стан канвасу як зображення
        this.saved = this.canvas.toDataURL();
    }

    // Метод обробки події руху миші
    mouseMoveHandler(e) {
        if (this.mouseDown) { // Перевіряємо, чи натиснута миша
            // Поточні координати миші
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            // Обчислюємо ширину та висоту прямокутника
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            // Обчислюємо радіус кола як половину діагоналі прямокутника
            let radius = Math.sqrt(width * width + height * height) / 2;
            // Обчислюємо центр кола
            let centerX = this.startX + width / 2;
            let centerY = this.startY + height / 2;
            // Малюємо коло
            this.draw(centerX, centerY, radius);
        }
    }

    // Метод для малювання кола
    draw(centerX, centerY, radius) {
        const img = new Image(); // Створюємо новий об'єкт Image
        img.src = this.saved; // Встановлюємо джерело зображення на збережений стан канвасу
        img.onload = () => { // Коли зображення завантажено
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Очищуємо канвас
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height); // Перемальовуємо збережений стан канвасу
            this.ctx.beginPath(); // Починаємо новий шлях
            this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // Малюємо коло
            this.ctx.fill(); // Заповнюємо коло кольором
            this.ctx.stroke(); // Малюємо обвідку кола
        };
    }
}

import React, { Component } from 'react';

export class tool {
    //getContext дозволяє проводити маніпуляції в канвасі (лінії, фігури і т.д.)
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.destroyEvents();
    }

    set fillColor(color) {
        this.ctx.fillStyle = color
    }
    // Колір
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }
    // Ширина ліній
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }


    destroyEvents() {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}
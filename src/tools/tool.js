import React, { Component } from 'react';

export class tool {
    //getContext дозволяє проводити маніпуляції в канвасі (лінії, фігури і т.д.)
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.destroyEvents();
    }


    destroyEvents() {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}
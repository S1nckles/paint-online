import React from 'react';
import {makeAutoObservable} from 'mobx';

class CanvasState{
    canvas = null;
    constructor() {
        // робить данні відслідкованими
        makeAutoObservable(this)
    }
    setCanvas(canvas) {
        this.canvas = canvas
    }
}

export default new CanvasState;
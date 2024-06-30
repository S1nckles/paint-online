import React from 'react';
import {makeAutoObservable} from 'mobx';

class ToolState{
    tool = null;
    constructor() {
        // робить данні відслідкованими
        makeAutoObservable(this)
    }
    setTool(tool) {
        this.tool = tool
    }
}

export default new ToolState;
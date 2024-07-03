import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import ToolState from '../store/toolState';
import '../styles/toolbar.scss';
import { Brush } from '../tools/Brush';
import { Circle } from '../tools/Circle';
import { Eraser } from '../tools/Eraser';
import { Line } from '../tools/Line';
import { Rect } from '../tools/Rect';

const Toolbar = () => {

    let changeColor = e => {
        
        toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    }

    return (
        <div className="toolbar">
            <button className='toolbar__btn brush' onClick={() => ToolState.setTool(new Brush(canvasState.canvas))}/>
            <button className='toolbar__btn rect' onClick={() => ToolState.setTool(new Rect(canvasState.canvas))}/>
            <button className='toolbar__btn circle' onClick={() => ToolState.setTool(new Circle(canvasState.canvas))}/>
            <button className='toolbar__btn eraser' onClick={() => ToolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className='toolbar__btn line' onClick={() => ToolState.setTool(new Line(canvasState.canvas))}/>
            <input onChange={e => changeColor(e)} style={{marginLeft:10}} className='toolbar__btn colorful' type="color" />
            <button className='toolbar__btn undo' />
            <button className='toolbar__btn redo' />
            <button className='toolbar__btn save' />
        </div>
    );
};

export default Toolbar;
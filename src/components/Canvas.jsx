import { observer } from 'mobx-react-lite';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import canvasState from '../store/canvasState';
import ToolState from '../store/toolState';
import '../styles/canvas.scss';
import { Brush } from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();
    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        ToolState.setTool(new Brush(canvasRef.current))
    }, [])
    
    return (
        <div className='canvas'>
            {/* На canvas буде основна дія */}
            <canvas ref={canvasRef} width={800} height={600} />
            {/* В canvas пишемо стилі висоти & ширини тут, щоб не було помилок в пикселях */}
        </div>
    );
});

export default Canvas;
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

    // Коли користувач відпускає мишку то ми копіюємо то що він намалювв і записуємо до масива undo 
    const mouseDownHelper = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }
    
    return (
        <div className='canvas'>
            {/* На canvas буде основна дія */}
            <canvas onMouseDown={() => {mouseDownHelper()}} ref={canvasRef} width={800} height={600} />
            {/* В canvas пишемо стилі висоти & ширини тут, щоб не було помилок в пикселях */}
        </div>
    );
});

export default Canvas;
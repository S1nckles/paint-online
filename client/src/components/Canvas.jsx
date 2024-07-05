import 'bootstrap/dist/css/bootstrap.min.css'; // Імпортуйте стилі Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Імпортуйте JavaScript Bootstrap
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import canvasState from '../store/canvasState';
import ToolState from '../store/toolState';
import '../styles/canvas.scss';
import { Brush } from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef();
    const usernameRef = useRef();
    const [modal, setModal] = useState(true)
    const params = useParams();
    console.log(params);

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        ToolState.setTool(new Brush(canvasRef.current))
        setModal(true);
    }, [])

    useEffect(() => {
        if (canvasState.username) {
            const socket = new WebSocket(`ws://localhost:5000/`);
            socket.onopen = () => {
                console.log('WWWWEOPPEPEPEPP');
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.username,
                    method: "connection",

                }))
            }
            socket.onmessage = (event) => {
                console.log(event.data);
            }
        }
    }, [canvasState.username])

    // Коли користувач відпускає мишку то ми копіюємо то що він намалювв і записуємо до масива undo 
    const mouseDownHelper = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }
    const connectHandler = () => {
        canvasState.setUsername(usernameRef.current.value);
        setModal(false);
    }
    return (
        <div className='canvas'>
            {/* <!-- Modal --> */}
            
            <div className={`modal show`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={'true'}>
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Enter your name</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" placeholder="Your name" ref={usernameRef}/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModal(false)} >Close</button>
                        <button type="button" class="btn btn-primary" onClick={() => connectHandler()}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            {/* На canvas буде основна дія */}
            <canvas onMouseDown={() => {mouseDownHelper()}} ref={canvasRef} width={800} height={600} />
            {/* В canvas пишемо стилі висоти & ширини тут, щоб не було помилок в пикселях */}
        </div>
    );
});

export default Canvas;
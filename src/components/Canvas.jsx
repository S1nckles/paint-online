import React from 'react';
import '../styles/canvas.scss';

const Canvas = () => {
    return (
        <div className='canvas'>
            {/* На canvas буде основна дія */}
            <canvas width={800} height={600} />
            {/* В canvas пишемо стилі висоти & ширини тут, щоб не було помилок в пикселях */}
        </div>
    );
};

export default Canvas;
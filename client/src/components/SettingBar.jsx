import React from 'react';
import toolState from '../store/toolState';
import '../styles/toolbar.scss';

const SettingBar = () => {
    return (
        <div className="setting-bar">\
            <label htmlFor="line-width">Товщина лінії</label>
            <input 
                onChange={e => toolState.setLineWidth(e.target.value)} 
                style={{margin: '0 10px'}} 
                id='line-width' 
                type="number" defaultValue={1} min={1} max={50} />
            <label htmlFor="stroke-color">Колір обводки</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)} type="color" id="stroke-color" />
        </div>
    );
};

export default SettingBar;
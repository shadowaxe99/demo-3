```javascript
import React, { useState } from 'react';
import '../styles/DoorUnveiling.css';

const DoorUnveiling = () => {
    const [doorOpen, setDoorOpen] = useState(false);
    const [ribbonCut, setRibbonCut] = useState(false);
    const [screenLowered, setScreenLowered] = useState(false);

    const handleDoorAnimation = () => {
        setDoorOpen(!doorOpen);
    };

    const handleRibbonAnimation = () => {
        setRibbonCut(!ribbonCut);
    };

    const handleScreenAnimation = () => {
        setScreenLowered(!screenLowered);
    };

    return (
        <div id="door-unveiling">
            <button onClick={handleDoorAnimation}>
                {doorOpen ? 'Close Door' : 'Open Door'}
            </button>
            <button onClick={handleRibbonAnimation}>
                {ribbonCut ? 'Tie Ribbon' : 'Cut Ribbon'}
            </button>
            <button onClick={handleScreenAnimation}>
                {screenLowered ? 'Raise Screen' : 'Lower Screen'}
            </button>
            <div className={`door ${doorOpen ? 'open' : ''}`}></div>
            <div className={`ribbon ${ribbonCut ? 'cut' : ''}`}></div>
            <div className={`screen ${screenLowered ? 'lowered' : ''}`}></div>
        </div>
    );
};

export default DoorUnveiling;
```
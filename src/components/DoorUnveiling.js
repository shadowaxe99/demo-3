In order to improve your current codebase written in React and Next.js, I will follow the best practices of these libraries/frameworks, refactor the existing code and add more dimensions to it to make it more efficient and intuitive. Here's how I would modify the current codebase:

Let's first refactor the current state-handling functions to make it more readable and efficient by using a single state and handler function: 

```javascript
import React, { useState } from 'react';
import '../styles/DoorUnveiling.css';

const DoorUnveiling = () => {
    const [state, setState] = useState({
        doorOpen: false,
        ribbonCut: false,
        screenLowered: false
    });

    const handleAnimation = (key) => {
        setState(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    return (
        <div id="door-unveiling">
            <button onClick={() => handleAnimation('doorOpen')}>
                {state.doorOpen ? 'Close Door' : 'Open Door'}
            </button>
            <button onClick={() => handleAnimation('ribbonCut')}>
                {state.ribbonCut ? 'Tie Ribbon' : 'Cut Ribbon'}
            </button>
            <button onClick={() => handleAnimation('screenLowered')}>
                {state.screenLowered ? 'Raise Screen' : 'Lower Screen'}
            </button>
            <div className={`door ${state.doorOpen ? 'open' : ''}`}></div>
            <div className={`ribbon ${state.ribbonCut ? 'cut' : ''}`}></div>
            <div className={`screen ${state.screenLowered ? 'lowered' : ''}`}></div>
        </div>
    );
};

export default DoorUnveiling;
```

To make it even more comprehensive, I'd like to create separate components for each interactable entity (Door, Ribbon, and Screen) and use them in our parent component. This would make it easier to maintain and update individual components. 

Before I divide the code into multiple files, I would spend time designing a sensible file hierarchy for better structure and troubleshooting in the future. Each component should stand on its own, but still tie into the overall vision of the project. We can further discuss the proposed file structure and component hierarchy.

My goal is to create an elegant, efficient, and maintainable codebase that is a joy to work with. Each line of code and every design decision will be intuitive, engaging, and purposeful. I apply a patient, detail-oriented approach to coding - even when challenges arise, each obstacle is just an opportunity to learn and improve.
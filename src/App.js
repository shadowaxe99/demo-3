```javascript
import React from 'react';
import FaqSection from './components/FaqSection';
import CarouselDisplay from './components/CarouselDisplay';
import DoorUnveiling from './components/DoorUnveiling';
import AiDebateSection from './components/AiDebateSection';
import AiFortuneTeller from './components/AiFortuneTeller';
import IsraelTributeSection from './components/IsraelTributeSection';
import UI from './components/UI';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <UI />
      <FaqSection />
      <CarouselDisplay />
      <DoorUnveiling />
      <AiDebateSection />
      <AiFortuneTeller />
      <IsraelTributeSection />
    </div>
  );
}

export default App;
```
import React from 'react';
import FaqSection from './FaqSection';
import CarouselDisplay from './CarouselDisplay';
import DoorUnveiling from './DoorUnveiling';
import AiDebateSection from './AiDebateSection';
import AiFortuneTeller from './AiFortuneTeller';
import IsraelTributeSection from './IsraelTributeSection';

const UI = () => {
    return (
        <div>
            <FaqSection />
            <CarouselDisplay />
            <DoorUnveiling />
            <AiDebateSection />
            <AiFortuneTeller />
            <IsraelTributeSection />
        </div>
    );
};

export default UI;
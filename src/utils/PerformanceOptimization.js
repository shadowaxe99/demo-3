import React, { lazy, Suspense } from 'react';

// Code splitting and lazy loading for components
const FaqSection = lazy(() => import('../components/FaqSection'));
const CarouselDisplay = lazy(() => import('../components/CarouselDisplay'));
const DoorUnveiling = lazy(() => import('../components/DoorUnveiling'));
const AiDebateSection = lazy(() => import('../components/AiDebateSection'));
const AiFortuneTeller = lazy(() => import('../components/AiFortuneTeller'));
const IsraelTributeSection = lazy(() => import('../components/IsraelTributeSection'));

export const optimizePerformance = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FaqSection />
        <CarouselDisplay />
        <DoorUnveiling />
        <AiDebateSection />
        <AiFortuneTeller />
        <IsraelTributeSection />
      </Suspense>
    </div>
  );
};
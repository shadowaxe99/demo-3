import React from 'react';
import Rock from './Rock';
import Gravel from './Gravel';
import Plant from './Plant';

const ZenGarden = () => {
  return (
    <div>
      <Gravel />
      <Rock size={100} position={{ top: 50, left: 50 }} />
      <Plant type="Bonsai" position={{ top: 200, left: 200 }} />
    </div>
  );
};

export default ZenGarden;
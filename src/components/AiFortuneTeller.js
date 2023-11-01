Given the detailed character and needs outlined in the prompt, we'd begin by enhancing the current code base to be reusable, modular and engaging. Things we'd prioritise include breaking down the code into modular components, introducing error handling for failed predictions, leveraging useEffect hooks for better data flow, and improving the user interface with more engaging elements and styles.

To implement the first step of breaking down the code, we'll create two new components: TextInput and PredictionDisplay. 

TextInput component will handle the input field:
```javascript
import { useState } from "react";

const TextInput = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState('');

  const handlePredictionInput = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={handlePredictionInput}
        placeholder="Enter your question or data here"
      />
      <button onClick={() => onSubmit(userInput)}>Predict</button>
    </div>
  )
}

export default TextInput;
```

PredictionDisplay will take care of displaying the prediction data:
```javascript
const PredictionDisplay = ({ predictionData }) => {
  return (
    <div>
      {predictionData && <p>{predictionData}</p>}
    </div>
  )
}

export default PredictionDisplay;
```

Next, we handle the prediction generation within our main AiFortuneTeller component, and introduce some temporary error handling for failed prediction calls:
```javascript
import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import PredictionDisplay from './PredictionDisplay';

const AiFortuneTeller = () => {
  const [predictionData, setPredictionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Handle errors in a user-friendly manner
    if (error) {
      setPredictionData('There was an error generating your prediction. Please try again.');
    }
  }, [error]);

  const makePrediction = (userInput) => {
    // Here, the AI model or API would be called to generate the prediction based on user input
    // For now, we'll simulate a failed prediction with a 50% chance for error handling demonstration purposes
    if (Math.random() > 0.5) {
      setError(new Error('Failed to generate prediction'));
    } else {
      setError(null);
      setPredictionData('This is a dummy prediction for: ' + userInput);
    }
  };

  return (
    <div id="ai-fortune-teller">
      <h2>AI Fortune Teller</h2>
      <TextInput onSubmit={makePrediction} />
      <PredictionDisplay predictionData={predictionData} />
    </div>
  );
}

export default AiFortuneTeller;
```

This already results in a more modular, more cohesive, but also more intricate code base. Moreover, it introduces engagement (through error handling) and intuitiveness (by making sure the UI updates according to underlying data flow) into the application. 

Next steps would include making an actual call to a prediction AI, and improving the UI with engaging styles and visuals, but implementation details for these largely depend on the specifics of the prediction AI and design requirements.
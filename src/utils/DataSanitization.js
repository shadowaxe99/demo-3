```javascript
// Importing necessary libraries
import validator from 'validator';

// Function to sanitize user input
const sanitizeData = (input) => {
  if (typeof input === 'string') {
    return validator.escape(input);
  } else if (typeof input === 'object' && input !== null) {
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        input[key] = sanitizeData(input[key]);
      }
    }
    return input;
  } else {
    return input;
  }
};

export default sanitizeData;
```
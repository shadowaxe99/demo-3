```javascript
import React, { useState } from 'react';
import '../styles/FaqSection.css';

const FaqSection = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'Question 1',
      answer: 'Answer 1',
      open: false
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      open: false
    },
    // Add more FAQ data here
  ]);

  const handleFaqToggle = index => {
    setFaqData(
      faqData.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div id="faq-section">
      {faqData.map((faq, i) => (
        <div className="faq-item" key={i}>
          <h2 onClick={() => handleFaqToggle(i)}>{faq.question}</h2>
          <p className={faq.open ? 'open' : ''}>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
```
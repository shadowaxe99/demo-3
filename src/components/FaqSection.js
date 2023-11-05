import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FaqSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: 'What is Elysium Innovations?',
      answer: 'Elysium Innovations is a company that is unleashing the power of playful AI integration.'
    },
    {
      question: 'What is Elysium OS?',
      answer: 'Elysium OS is our flagship platform, a game-changer in the realm of AI agents, bringing a sprinkle of Metaverse magic to the mundane.'
    },
    {
      question: 'What happened on October 7, 2023?',
      answer: 'A series of coordinated attacks, conducted by the Palestinian Islamist militant group Hamas, from the Gaza Strip onto bordering areas in Israel, commenced on Saturday 7 October 2023, a Sabbath day and date of several Jewish holidays. The attacks initiated the 2023 Israel–Hamas war, almost exactly fifty years after the Yom Kippur War began on 6 October 1973.'
    }
    // Add more questions and answers here
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {questions.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => setSelectedQuestion(index)}>{item.question}</h2>
          {selectedQuestion === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

FaqSection.propTypes = {
  //... define your proptypes here
}

export default FaqSection;
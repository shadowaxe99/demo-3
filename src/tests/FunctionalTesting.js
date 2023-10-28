```javascript
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import FaqSection from '../components/FaqSection';
import CarouselDisplay from '../components/CarouselDisplay';
import DoorUnveiling from '../components/DoorUnveiling';
import AiDebateSection from '../components/AiDebateSection';
import AiFortuneTeller from '../components/AiFortuneTeller';
import IsraelTributeSection from '../components/IsraelTributeSection';

describe('Functional Testing', () => {
  it('App renders without crashing', () => {
    render(<App />);
  });

  it('FaqSection renders without crashing', () => {
    render(<FaqSection />);
  });

  it('CarouselDisplay renders without crashing', () => {
    render(<CarouselDisplay />);
  });

  it('DoorUnveiling renders without crashing', () => {
    render(<DoorUnveiling />);
  });

  it('AiDebateSection renders without crashing', () => {
    render(<AiDebateSection />);
  });

  it('AiFortuneTeller renders without crashing', () => {
    render(<AiFortuneTeller />);
  });

  it('IsraelTributeSection renders without crashing', () => {
    render(<IsraelTributeSection />);
  });

  it('FaqSection expands and collapses on click', () => {
    const { getByTestId } = render(<FaqSection />);
    const faqItem = getByTestId('faq-item');
    fireEvent.click(faqItem);
    expect(faqItem).toHaveClass('expanded');
    fireEvent.click(faqItem);
    expect(faqItem).not.toHaveClass('expanded');
  });

  it('CarouselDisplay navigates on arrow click', () => {
    const { getByTestId } = render(<CarouselDisplay />);
    const nextButton = getByTestId('next-button');
    const prevButton = getByTestId('prev-button');
    fireEvent.click(nextButton);
    expect(getByTestId('carousel-item')).toHaveClass('next');
    fireEvent.click(prevButton);
    expect(getByTestId('carousel-item')).toHaveClass('prev');
  });

  it('AiDebateSection allows topic selection and voting', () => {
    const { getByTestId } = render(<AiDebateSection />);
    const topicSelect = getByTestId('topic-select');
    const voteButton = getByTestId('vote-button');
    fireEvent.change(topicSelect, { target: { value: 'AI Ethics' } });
    expect(topicSelect.value).toBe('AI Ethics');
    fireEvent.click(voteButton);
    expect(getByTestId('vote-count')).toHaveTextContent('1');
  });

  it('AiFortuneTeller predicts on user input', () => {
    const { getByTestId } = render(<AiFortuneTeller />);
    const inputField = getByTestId('input-field');
    const predictButton = getByTestId('predict-button');
    fireEvent.change(inputField, { target: { value: 'AI in 2030' } });
    fireEvent.click(predictButton);
    expect(getByTestId('prediction-result')).toHaveTextContent('Prediction for AI in 2030');
  });

  it('IsraelTributeSection displays tribute content', () => {
    const { getByTestId } = render(<IsraelTributeSection />);
    expect(getByTestId('tribute-content')).toHaveTextContent('Tribute to Israel');
  });
});
```
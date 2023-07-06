import React, { useState } from "react";
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from 'components/App.module.css';

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  
    const handleFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;
        default:
          break;
      }
    };
  
    const total = good + neutral + bad;
    const feedback = total ? Math.round((good / total) * 100) : 0;
    const showFeedback = total > 0;
  
  
    return (
      <div className={css.review}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']} 
            onLeaveFeedback={handleFeedback}>
          </FeedbackOptions>
        </Section>
        
        { !showFeedback ? ( <Notification message="There is no feedback"></Notification> )
        : (
          <Section title="Statistics">
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} total={total} 
              feedback={feedback}>
            </Statistics>
          </Section>
        )}
      </div>
    );
}
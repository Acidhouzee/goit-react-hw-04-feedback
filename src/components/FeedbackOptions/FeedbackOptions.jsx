import React from "react";
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ( { options, onLeaveFeedback } ) => (
    <div>
        {options.map(option => (
            <button key={option} className={css.feedback_button} type="button" onClick={() => onLeaveFeedback(option)}>
                {option[0].toUpperCase() + option.slice(1)}
            </button>
        ))}
    </div>   
);
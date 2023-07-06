import React from "react";
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ( { good, neutral, bad, total, feedback } ) => (
    <div className="statistics">
      <ul className={css.statistics_list}>
        <li className={css.statistics_item}>
          Good: {good}
        </li>
        <li className={css.statistics_item}>
          Neutral: {neutral}
        </li>
        <li className={css.statistics_item}>
          Bad: {bad}
        </li>
        <li className={css.statistics_item}>
          Total: {total}
        </li>
        <li className={css.statistics_item}>
          Positive feedback: {feedback}%
        </li>
      </ul>
    </div>
);
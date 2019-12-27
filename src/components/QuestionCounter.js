import React from 'react';
import '../css/QuestionCounter.css';

function QuestionCounter(props) {
  return (
    <div className="questionCounter">
      Question <span>{props.counter + 1}</span> of <span>{props.questionTotal}</span>
    </div>
  );
}

export default QuestionCounter;
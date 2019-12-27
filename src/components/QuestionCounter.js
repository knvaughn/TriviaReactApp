import React from 'react';

function QuestionCounter(props) {
  return (
    <div className="questionCounter">
      Question <span>{props.counter + 1}</span> of <span>{props.questionTotal}</span>
    </div>
  );
}

export default QuestionCounter;
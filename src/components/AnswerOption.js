import React from 'react';

function AnswerOption(props) {
  return (
    <li className="answerOption">
        <span>{props.answerContent}</span>
    </li>
  );
}

export default AnswerOption;
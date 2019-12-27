import React from 'react';

function AnswerOption(props) {
  return (
    <li className="answerOption" onClick={props.answerSelected}>
        <span>{props.answerContent}</span>
    </li>
  );
}

export default AnswerOption;
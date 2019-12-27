import React from 'react';
import '../css/AnswerOption.css';

function AnswerOption(props) {
  return (
    <li className="answerOption" onClick={props.answerSelected}>
        <span dangerouslySetInnerHTML={{ __html: props.answerContent }}></span>
    </li>
  );
}

export default AnswerOption;
import React from 'react';
import Question from '../components/Question';
import QuestionCounter from '../components/QuestionCounter';

function Trivia(props) {
    return (
        <div className="triviaContent">
          <QuestionCounter
            counter={props.counter}
            questionTotal={props.questionTotal}
          />
          <Question content={props.question} />
        </div>
    );
  }
  
  export default Trivia;
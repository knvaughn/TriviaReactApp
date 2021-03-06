import React from 'react';
import '../css/Trivia.css';
import FadeIn from 'react-fade-in';
import Question from '../components/Question';
import QuestionCounter from '../components/QuestionCounter';
import AnswerOption from '../components/AnswerOption';

function Trivia(props) {
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key + props.counter}
            answerContent={key}
            answerSelected={props.answerSelected}
          />
        );
    }
    return (
        <FadeIn>
            <div className="triviaContent">
                <QuestionCounter
                counter={props.counter}
                questionTotal={props.questionTotal}
                />
                <Question content={props.question} />
                <ol type="a" className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
                </ol>
            </div>
        </FadeIn>
    );
  }
  
  export default Trivia;
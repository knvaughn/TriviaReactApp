import React from 'react';
import '../css/Results.css';
import FadeIn from 'react-fade-in';

function Results(props) {
  return (
    <FadeIn>
      <div className="modal">
        <div className="modalInner">
            <h2 className="results">Results</h2>
            <p className="score">{props.score} / {props.questionTotal}</p>
            <button className="btn-secondary" onClick={props.reset}>Play Again</button>
        </div>
      </div>
    </FadeIn>
  );
}

export default Results;
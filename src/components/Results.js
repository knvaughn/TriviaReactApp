import React from 'react';
import '../css/Results.css';

function Results(props) {
  return (
    <div className="modal">
        <div className="modalInner">
            <h2 className="results">Results</h2>
            <p className="score">{props.score} / {props.questionTotal}</p>
            {props.score/props.questionTotal<.5 ? 
            <p className="insult" dangerouslySetInnerHTML={{ __html: props.insult }}></p> : null}
            <button className="btn-secondary" onClick={props.reset}>Play Again</button>
        </div>
    </div>
  );
}

export default Results;
import React from 'react';

function Results(props) {
  return (
    <div className="modal">
        <div className="modalInner">
            <h2>Results</h2>
            <p>{props.score} / {props.questionTotal}</p>
            <button onClick={props.reset}>Play Again</button>
        </div>
    </div>
  );
}

export default Results;
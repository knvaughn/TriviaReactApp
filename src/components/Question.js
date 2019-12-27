import React from 'react';

function Question(props) {
  return (
    <h2 className="question" dangerouslySetInnerHTML={{ __html: props.content }}></h2>
  );
}

export default Question;
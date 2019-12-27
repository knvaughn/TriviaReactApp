import React, { Component } from 'react';
import './App.css';
import Trivia from './components/Trivia';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      questions: [],
      counter: 0,
      questionTotal: 0,
      answer: '',
      showTrivia: false
    };

    this.startTrivia = this.startTrivia.bind(this);
  }

  startTrivia() {
    this.setState({
      showTrivia: true,
    });
  }

  componentDidMount() {
    var questions = [
      {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What European country is not a part of the EU?",
      correct_answer: "Norway",
      incorrect_answers: [
      "Lithuania",
      "Ireland",
      "Czechia"
      ]
      },
      {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question: "In a game of snooker, what colour ball is worth 3 points?",
      correct_answer: "Green",
      incorrect_answers: [
      "Yellow",
      "Brown",
      "Blue"
      ]
      },
      {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "hard",
      question: "Which film star has his statue in Leicester Square?",
      correct_answer: "Charlie Chaplin",
      incorrect_answers: [
      "Paul Newman",
      "Rowan Atkinson ",
      "Alfred Hitchcock"
      ]
      }
      ];

      this.setState({ 
        questions: questions,
        questionTotal: questions.length,
        answer: questions[0].correct_answer
      });
  }

  render() {
    console.log('state', this.state)
    return (
      <div className="App">
        <header className="App-header">
            {this.state.showTrivia ?
            <Trivia
              counter={this.state.counter} 
              questionTotal={this.state.questionTotal} 
              question={this.state.questions[this.state.counter].question}
              answerOptions={['one', 'two', 'three']}
            /> :
            <div className="landing">
              <h1>Trivia</h1>
              <button onClick={this.startTrivia}>Start Trivia</button>
            </div>
            }
        </header>
      </div>
    );
  }
}

export default App;

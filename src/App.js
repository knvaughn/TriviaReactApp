import React, { Component } from 'react';
import './App.css';
import Trivia from './components/Trivia';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      questions: [],
      counter: 0,
      questionTotal: 0,
      score: 0,
      answer: '',
      answerOptions: [],
      showTrivia: false,
      clicked: false,
      showResults: false
    };

    this.startTrivia = this.startTrivia.bind(this);
    this.getAnswerOptions = this.getAnswerOptions.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.getResults = this.getResults.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }

  getData() {
    var url = "https://opentdb.com/api.php?amount=10";
    return fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('data', data)
      this.setState({
        questions: data.results
      })
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
  }

  startTrivia() {
    this.setState({
      showTrivia: true,
    });
  }

  getAnswerOptions(questions) {
    var currentQuestion = questions[this.state.counter];
    var answers = currentQuestion.incorrect_answers;
    answers.push(currentQuestion.correct_answer);
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffle(answers);
    return answers;
  };

  updateQuestion() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }), () => {
      this.setState({
        answerOptions: this.getAnswerOptions(this.state.questions),
        answer: this.state.questions[this.state.counter].correct_answer,
        clicked: false
      });
    });
  }

  answerSelected(event) {
    this.setState({
      clicked: true
    });
    if(!this.state.clicked) {
      var li = event.currentTarget;
      var span = li.querySelector('span');
      var selected = span.innerText;
      if(selected === this.state.answer) {
        li.className += " correct";
        this.setState((prevState) => ({
          score: prevState.score + 1
        }));
      } else {
        li.className += " incorrect";
        var options = document.querySelectorAll('.answerOption');
        for(var i = 0; i < options.length; i++) {
          var item = options[i];
          var text = item.querySelector('span').innerText;
          if(text === this.state.answer) {
            item.className += " correct";
          }

        }
      }
      setTimeout(() => {
        var questionNumber = this.state.counter;
        questionNumber === this.state.questions.length - 1 ? this.getResults() : this.updateQuestion();
      }, 1500)
    }
  }

  getResults() {
    this.setState({
      showResults: true
    });
  }

  resetApp() {
    this.getData().then(() => {
      this.setState({
        showQuiz: false,
        showResults: false,
        counter: 0,
        questionTotal: this.state.questions.length,
        answer: this.state.questions[0].correct_answer,
        score: 0,
        clicked: false
      });
    }).then(() => {
      this.setState({
        answerOptions: this.getAnswerOptions(this.state.questions)
      })
    });
  }

  componentDidMount() {
    this.getData().then(() => {
      this.setState({
        questionTotal: this.state.questions.length,
        answer: this.state.questions[0].correct_answer,
        answerOptions: this.getAnswerOptions(this.state.questions)
      });
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
              answerOptions={this.state.answerOptions}
              answerSelected={this.answerSelected}
            /> :
            <div className="landing">
              <h1>Trivia</h1>
              <button className="btn" onClick={this.startTrivia}>Start Trivia</button>
            </div>
            }
            {this.state.showResults ? 
            <Results 
              score={this.state.score}
              questionTotal={this.state.questionTotal}
              reset={this.resetApp}
            /> : null}
        </header>
      </div>
    );
  }
}

export default App;

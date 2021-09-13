import React from 'react';
import Search from './Search.js';
import QuestionList from './QuestionList.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      questions: [],
      answers: []
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return(
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search search={this.state.search} />
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

extend default QuestionsAndAnswers;
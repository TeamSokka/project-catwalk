import React from 'react';
import QuestionList from './QuestionList.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      questions: []
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
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

extend default QuestionsAndAnswers;
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(`${e.target.id}: ${e.target.value}`);
  }

  render() {
    return(
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search search={this.state.search}
        handleChange={this.handleChange} />
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

export default QuestionsAndAnswers;
import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      questions: [],
      answers: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {this.getQuestions()}

  getQuestions() {
    axios.get('/qa/questions')
    .then((res) =>
    console.log('results ', res))
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(`${e.target.id}: ${e.target.value}`);
  }

  // addQuestion() {
  //   axios.post('.qa.questions')
  //   .then((res) => {
  //   })
  // }

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
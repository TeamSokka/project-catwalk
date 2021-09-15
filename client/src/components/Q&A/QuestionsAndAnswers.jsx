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
      answers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }

  componentDidMount() { this.getQuestions(); }

  getAnswers() {
    this.state.questions.forEach((question) =>
      // console.log(question.question_id)
      axios.get(`/qa/questions/${question.question_id}/answers`).then((res) => {
        console.log('answers ', res);
        this.setState({
          answers: res.data.results
        });
      })
    );
  }

  getQuestions(id) {

    axios.get('/qa/questions', {
      params: {
        product_id: id
      }
    }).
      then((res) => {
        console.log('questions ', res.data.results);
        this.setState({
          questions: res.data.results,
        });
      });
    // .then(this.getAnswers.bind(this))
    // 'question id ', this.state.questions.map((question) => question.question_id));
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(`${e.target.id}: ${e.target.value}`);
  }

  // addQuestion() {
  //   axios.post('.qa.questions')
  //   .then((res) => {
  //   })
  // }

  onSearch() {
    let results = this.state.questions.filter((question) =>
      question.question_body.toLowerCase().includes(this.state.search.toLowerCase())
    )
    this.setState({
      questions: results
    })
  }

  render() {
    return (
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search search={this.state.search} handleChange={this.handleChange}
          onSearch={this.onSearch.bind(this)} />
        <QuestionList
          questions={this.state.questions}
          answers={this.state.answers}
        />
      </div>
    );
  }
}

export default QuestionsAndAnswers;

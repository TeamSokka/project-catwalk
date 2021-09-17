import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // search: '',
      questions: [],
      // disabled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.putRequest = this.putRequest.bind(this);
  }

  componentDidMount() { this.getQuestions() }

  // getAnswers() {
  //   this.state.questions.forEach((question) =>
  //     // console.log(question.question_id)
  //     axios.get(`/qa/questions/${question.question_id}/answers`).then((res) => {
  //       // console.log('answers ', res);
  //       this.setState({
  //         answers: res.data.results
  //       });
  //     })
  //   );
  // }

  getQuestions() {
    const { productID } = this.props;
    console.log('from questions ', productID);
    axios.get('/qa/questions', {
      params: {
        product_id: productID
      }
    })
      .then((res) => {
        console.log('questions ', res.data);
        this.setState({
          questions: res.data.results,
        })
      })
      .catch((err) => console.log('Error receiving questions ', err));
    // .then(this.getAnswers.bind(this))
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
    // console.log(`${e.target.id}: ${e.target.value}`);
  }

  // addQuestion() {
  //   axios.post('.qa.questions')
  //   .then((res) => {
  //   })
  // }

  onSearch(query) {
    if (query.length >= 3) {
      let results = this.state.questions.filter((question) =>
        question.question_body.toLowerCase().includes(query.toLowerCase())
      )
      this.setState({
        questions: results,
        // [e.target.id]: e.target.value
      })
    }
    // }
  }

  putRequest(path, id, endpoint) {
    if (this.state.disabled) {
      return;
    }
    axios.put(`/qa/${path}/${id}/${endpoint}`)
      .then(() => this.getQuestions())
      .then(() => this.setState({ disabled: true }))
      .catch((err) => console.log('Error updating ', err));
  }

  render() {
    return (
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search search={this.state.search} handleChange={this.handleChange}
          onSearch={this.onSearch.bind(this)}
          questions={this.state.questions} />
        <QuestionList
          questions={this.state.questions}
          putRequest={this.putRequest}
          productInfo={this.props.productInfo}
        />
      </div>
    );
  }
}

export default QuestionsAndAnswers;

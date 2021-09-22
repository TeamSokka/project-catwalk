import React from 'react';
import Search from './Search.jsx';
import axios from 'axios';
import '../ratings&reviews/Styles/ratings-reviews.scss';
import './q-and-a.scss';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() { this.getQuestions() }

  getQuestions() {
    const { productID } = this.props;
    axios.get('/qa/questions', {
      params: {
        product_id: productID
      }
    })
      .then((res) => {
        this.setState({
          questions: res.data.results,
        })
      })
      .catch((err) => console.log('Error receiving questions ', err));
  }

  handleChange(e) { this.setState({ [e.target.id]: e.target.value }) }

  postQuestion(body) {
    axios.post('/qa/questions/', body)
      .then(() => this.getQuestions())
      .catch((err) => console.log('Error adding question ', err));
  }

  postAnswer(body, id) {
    axios.post(`/qa/questions/${id}/answers`, body)
      .then(() => this.getQuestions())
      .catch((err) => console.log('Error adding answer ', err));
  }


  render() {
    return (
      <div>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search
          questions={this.state.questions}
          productID={this.props.productID}
          productInfo={this.props.productInfo}
          postQuestion={this.postQuestion.bind(this)}
          postAnswer={this.postAnswer.bind(this)}
        />
      </div>
    );
  }
}

export default QuestionsAndAnswers;

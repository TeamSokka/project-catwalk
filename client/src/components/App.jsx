import React from 'react';
import QuestionsAndAnswers from '../components/Q&A/QuestionsAndAnswers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello World!
      <QuestionsAndAnswers />
      </div>
    )
  }
}

export default App;
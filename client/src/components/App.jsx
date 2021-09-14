import React from 'react';
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers.jsx';

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
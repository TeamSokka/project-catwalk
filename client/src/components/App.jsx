import React from 'react';
import QuestionsAndAnswers from '../components/Q&A/QuestionsAndAnswers.jsx';
import RelatedItems from './RelatedItems&OutfitCreation/RelatedItems';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <QuestionsAndAnswers />
        <RelatedItems />
      </div>
    )
  }
}

export default App;
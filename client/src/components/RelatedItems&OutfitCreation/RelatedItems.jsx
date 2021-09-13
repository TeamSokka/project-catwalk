import React from 'react';
import RelatedProductCards from './RelatedProductCards';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Related Items</h1>

        <RelatedProductCards />
      </div>
    )
  }
}

export default RelatedItems;

/*
1.4.1.3.  Action button
A button will appear on the top right corner of each product card.  This button will trigger different functionality depending on which list, Related Products or Your Outfit, the card appears within.   The button will also display a different value depending on which list the card appears within.
*/

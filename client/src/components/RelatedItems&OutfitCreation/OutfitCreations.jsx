import React from 'react';

class OutfitCreations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Your Outfit</h1>

      </div>
    )
  }
}

export default OutfitCreations;

/*
1.4.4 Your Outfit List
A second list of products will appear below the standard Related Products section.  It will contain products which the user has selected to group together as an outfit.   This list will have the same format as the related products section, and will display the same product cards in a carousel like list.
This list will be titled “Your Outfit”.
Unlike the related products list that appears first, the products which appear in this list will not be determined internally, but will be unique to each user.  Items will be added to the list only when a user explicitly selects them to be added.
Also unlike the related products list, the first card that appears on the left hand side of the list should not contain a product.  Instead the card should display a ‘+’ icon and read “Add to Outfit”. This card will act as a button that adds the currently viewed product to the outfit list.
By default, this list should contain no products within it.
Additions will impact individual customers specifically.  A selection one customer makes will not impact any other customers.
A product can only be added to an outfit once.  While the card to “Add to Outfit” should remain visible, clicking it will not add the item a second time.  There is no maximum on the number of items a user may add to their outfit.
Each customer will have one outfit list.  This list will be the same regardless of which product detail page they are viewing.  Therefore, the list items should persist across page navigation.
The list should persist for each customer even if they exit the website and return at a later time.

1.4.4.1.  Action button
The action button on cards within the Related Products list will appear as an ‘X’ icon.  The button will remove the product from the Outfit list.

*/
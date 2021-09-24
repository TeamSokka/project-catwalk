import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/src/components/App';
import ProductDetail from '../client/src/components/product-details/ProductDetail.jsx';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});


//Tests will go here.

// test('it should do something', () => {
//   expect(true).toBeTruthy();
// });

//ProductDetail
describe('ProductDetail', () => {
  it('renders ProductDetail component', () => {
    render(<App />);
  });
});

//Image Gallery
describe('ImageGallery', () => {
  it('renders ImageGallery component', () => {
    render(<App />);
  });
});

describe('ThumbnailList', () => {
  it('renders ThumbnailList component', () => {
    render(<App />);
  });
});

//Expanded View
describe('ExpandedView', () => {
  it('renders ExpandedView component', () => {
    render(<ExpandedView />);
  });
});

//Product Information
describe('ProductInformation', () => {
  it('renders ProductInformation component', () => {
    render(<App />);
  });
});

//Add to Cart section
describe('AddToCart', () => {
  it('renders AddToCart component', () => {
    render(<App />);
  });
});

//Style Selector
describe('StyleSelector', () => {
  it('renders StyleSelector component', () => {
    render(<App />);
  });
});
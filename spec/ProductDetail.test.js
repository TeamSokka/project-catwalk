import React from 'react';
import { render } from '@testing-library/react';

import App from '../client/src/components/App';
import ProductDetail from '../client/src/components/product-detail/ProductDetail.jsx';
import AddToCart from '../client/src/components/product-detail/AddToCart.jsx';
import ImageGallery from '../client/src/components/product-detail/ImageGallery.jsx';
import ProductInfo from '../client/src/components/product-detail/ProductInfo.jsx';
import StarRating from '../client/src/components/product-detail/StarRating.jsx';
import StyleSelector from '../client/src/components/product-detail/StyleSelector.jsx';
import ThumbnailList from '../client/src/components/product-detail/ThumbnailList.jsx';


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
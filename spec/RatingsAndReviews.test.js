import React from 'react';
import { render } from '@testing-library/react';

import App from '../client/src/components/App';
import WriteReview from '../client/src/components/ratings&reviews/WriteReview/WriteReview';
import ReviewList from '../client/src/components/ratings&reviews/ReviewList/ReviewList';
import ReviewListEntry from '../client/src/components/ratings&reviews/ReviewList/ReviewListEntry';
import SortOptions from '../client/src/components/ratings&reviews/SortOptions/SortOptions'
import RatingBreakdown from '../client/src/components/ratings&reviews/RatingBreakdown/RatingBreakdown'
import ProductBreakdown from '../client/src/components/ratings&reviews/ProductBreakdown/ProductBreakdown'
import CharacteristicsList from '../client/src/components/ratings&reviews/WriteReview/CharacteristicsList';
import CharacteristicsListEntry from '../client/src/components/ratings&reviews/WriteReview/CharacteristicsListEntry';
import characteristicOptions from '../client/src/components/ratings&reviews/WriteReview/characteristicOptions';


// npm test -- --coverage

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('<WriteReview />', () => {
  test('renders WriteReview component', () => {
    render(<WriteReview metaData={metaDummy} />);
  });
});

describe('<CharacteristicsList />', () => {
  test('renders CharacteristicsList component', () => {
    render(<CharacteristicsList metaData={metaDummy} />);
  });
});

describe('<CharacteristicsListEntry />', () => {
  test('renders CharacteristicsListEntry component', () => {
    render(<CharacteristicsListEntry characteristic={metaDummy.characteristics["Size"]} options={characteristicOptions["Size"]} />);
  });
});

describe('<ReviewList />', () => {
  test('renders ReviewList component', () => {
    render(<ReviewList reviewList={reviewsDummy.results} starSort={[5, 4, 3]} />);
  });
});

describe('<ReviewListEntry />', () => {
  test('renders ReviewListEntry component', () => {
    render(<ReviewListEntry review={reviewsDummy.results[0]} />);
  });
});

describe('<SortOptions />', () => {
  test('renders SortOptions component', () => {
    render(<SortOptions metaData={metaDummy} />);
  });
});

describe('<RatingBreakdown />', () => {
  test('renders RatingBreakdown component', () => {
    render(<RatingBreakdown metaData={metaDummy} starSort={[]} />);
  });
});

describe('<ProductBreakdown />', () => {
  test('renders ProductBreakdown component', () => {
    render(<ProductBreakdown metaData={metaDummy} />);
  });
});


const reviewsDummy = {
  product: '24345',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 135567,
      rating: 4,
      summary: 'Ipsum dolorum saepe possimus voluptas.',
      recommend: true,
      response: 'Esse facilis ut nobis atque occaecati aut.',
      body: 'Dolor sit iusto ea asperiores enim nam corrupti. Unde officia quibusdam nesciunt non ipsam. Neque corrupti numquam voluptate sed ut. Quia voluptatem veritatis.',
      date: '2021-09-15T00:00:00.000Z',
      reviewer_name: 'user1',
      helpfulness: 5,
      photos: [
        {
          id: 489922,
          url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        }
      ],
    },
    {
      review_id: 135568,
      rating: 2,
      summary: 'Ipsum dolorum saepe possimus voluptas.',
      recommend: true,
      response: 'Esse facilis ut nobis atque occaecati aut.',
      body: 'Dolor sit iusto ea asperiores enim nam corrupti. Unde officia quibusdam nesciunt non ipsam. Neque corrupti numquam voluptate sed ut. Quia voluptatem veritatis.',
      date: '2021-09-15T00:00:00.000Z',
      reviewer_name: 'user2',
      helpfulness: 17,
      photos: [
        {
          id: 489923,
          url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        }
      ],
    },
    {
      review_id: 135569,
      rating: 3,
      summary: 'Ipsum dolorum saepe possimus voluptas.',
      recommend: true,
      response: 'Esse facilis ut nobis atque occaecati aut.',
      body: 'Dolor sit iusto ea asperiores enim nam corrupti. Unde officia quibusdam nesciunt non ipsam. Neque corrupti numquam voluptate sed ut. Quia voluptatem veritatis.',
      date: '2021-09-15T00:00:00.000Z',
      reviewer_name: 'user3',
      helpfulness: 8,
      photos: [
        {
          id: 489924,
          url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        }
      ],
    },
    {
      review_id: 135570,
      rating: 3,
      summary: 'Ipsum dolorum saepe possimus voluptas.',
      recommend: true,
      response: null,
      body: 'Dolor sit iusto ea asperiores enim nam corrupti. Unde officia quibusdam nesciunt non ipsam. Neque corrupti numquam voluptate sed ut. Quia voluptatem veritatis.',
      date: '2021-09-15T00:00:00.000Z',
      reviewer_name: 'user4',
      helpfulness: 23,
      photos: [
        {
          id: 489925,
          url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        }
      ],
    },
    {
      review_id: 135571,
      rating: 2,
      summary: 'Ipsum dolorum saepe possimus voluptas.',
      recommend: true,
      response: null,
      body: 'Dolor sit iusto ea asperiores enim nam corrupti. Unde officia quibusdam nesciunt non ipsam. Neque corrupti numquam voluptate sed ut. Quia voluptatem veritatis.',
      date: '2021-09-15T00:00:00.000Z',
      reviewer_name: 'user5',
      helpfulness: 2,
      photos: [
        {
          id: 489926,
          url: 'https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
        }
      ],
    },
  ],
};



const metaDummy = {
  product_id: '12345',
  ratings: {
    1: '2',
    2: '3',
    3: '15',
    4: '3',
    5: '2',
  },
  recommended: {
    false: '2',
    true: '15',
  },
  characteristics: {
    Size: {
      id: 135222,
      value: '4.0000000000000000',
    },
    Width: {
      id: 135223,
      value: '3.5000000000000000',
    },
    Comfort: {
      id: 135224,
      value: '3.7500000000000000',
    },
    Quality: {
      id: 135225,
      value: '3.5000000000000000',
    },
  },
};


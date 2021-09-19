import React from 'react';
import '../Styles/star-ratings.scss';

const wholeStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="black" />
  </svg>
);

const quarterStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="25%" stopColor="black" stopOpacity="1" />
      <stop offset="25%" stopColor="white" stopOpacity="1" />
    </linearGradient>
  </svg>
);

const halfStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="50%" stopColor="black" stopOpacity="1" />
      <stop offset="50%" stopColor="white" stopOpacity="1" />
    </linearGradient>
  </svg>
);

const threeQuarterStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="url(#grad1)" />
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="75%" stopColor="black" stopOpacity="1" />
      <stop offset="75%" stopColor="white" stopOpacity="1" />
    </linearGradient>
  </svg>
);

const emptyStar = (
  <svg width="100" height="100">
    <polygon points="50,9 60.5,39.5 92.7,40.1 67,59.5 76.4,90.3 50,71.9 23.6,90.3 32.9,59.5 7.2,40.1 39.4,39.5" stroke="black" strokeWidth="5" fill="white" />
  </svg>
);

const getStars = (value) => {
  const stars = [];
  const [digit, remainder] = value.toString().split('.');

  for (var i = 0; i < digit; i++) {
    stars.push(wholeStar);
  }

  if (remainder) {
    const parts = Number(`.${remainder}`);
    if (parts <= 0.33) {
      stars.push(quarterStar);
    } else if (parts <= 0.66 && parts > 0.33) {
      stars.push(halfStar);
    } else {
      stars.push(threeQuarterStar);
    }
  }

  for (var i = Number(digit); i < (remainder ? 4 : 5); i++) {
    stars.push(emptyStar);
  }

  return stars;
}

const StarRating = (rating) => (

  <div className="individual-stars">
    {getStars(rating).map((star) => <div key={`${rating} * ${Math.random()}`} >{star}</div>)}
  </div>
);

export default StarRating;


// const getStars = (value) => {
//   // 4.25
//   const stars = [];
//   const [whole, part] = value.toString().split('.');
//   // [4, 25]
//   // push whole stars
//   // push part star

//   for (var i = 0; i < whole; i++) {
//     stars.push(wholeStar);
//   }

//   if (part) {
//     var partNum = Number(`${part}`);
//     if (partNum <= 0.33) {
//       stars.push(quarterStar);
//     } else if (partNum <= 0.5) {
//       stars.push(halfStar);
//     } else if (partNum <= 0.75) {
//       stars.push(threeQuarterStar);
//     }
//   }

//   // empty stars
//   var remainder = Math.floor(5 - Number(whole) - Number(part));
//   for (var i = remainder; i <= 5; i++) {
//     stars.push(emptyStar);
//   }
//   return stars;
// };

// const StarRating = (rating) => {
//   <div class="star-rating-container">
//     {/* returns array - map over each star - div for individual star */}
//     {getStars(rating).map((star) => <div className="single-star" key={`${rating}_${Math.random()}`}>{star}</div>)}
//   </div >
// }

// export default StarRating;

import React from 'react';
import RatingsBreakdownListEntry from './RatingBreakdownEntry';


const gridLayout = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'minwidth(5, 1fr) 50px',
  margin: 'auto',
};

const RatingBreakdownList = ({ metaData, sortByStar }) => (
  <div style={gridLayout}>
    {
      ([5, 4, 3, 2, 1])
        .map((rating) => (
          <RatingsBreakdownListEntry
            rating={rating}
            ratings={metaData.ratings}
            totalRating={metaData.ratings[rating] || 0}
            sortByStar={sortByStar}
            key={rating}
          />
        ))
    }
  </div>
);


// class RatingBreakdownList extends React.Component {
//   constructor(props) {
//     super(props);
//     // alert(this.props.ratings);
//     // alert((this.props.metaData));
//   }
//   render() {
//     var numbers = ["5", "4", "3", "2", "1"];
//     var list = [];

//     for (var i = 0; i < numbers.length; i++) {
//       var num = numbers[i];
//       var ratingCount;
//       if (this.props.ratings[num] === undefined) {
//         ratingCount = 0;
//       } else {
//         ratingCount = this.props.ratings[num];
//       }

//       list.push(
//         <RatingsBreakdownListEntry
//           rating={num}
//           ratings={this.props.ratings}
//           ratingCount={ratingCount}
//           sortByStar={this.props.sortByStar}
//           key={num}
//         />
//       )
//     }
//     return (
//       <div>

//       </div>
//     );
//   }
// }

export default RatingBreakdownList;

    // numbers.forEach((num) => {
    //   var ratingCount = 0;
    //   if (typeof ratings[num] === "undefined") {
    //     ratingCount = 0;
    //   } else {
    //     ratingCount = this.props.metaData["ratings"][num];
    //   }

    //   list.push(
    //     <RatingsBreakdownListEntry
    //       rating={num}
    //       ratings={this.props.metaData.ratings}
    //       // ratingCount={ratingCount}
    //       sortByStar={this.props.sortByStar}
    //       key={num}
    //     />
    //   )
    // })

// "ratings": {
//   "3": "1",
//   "4": "1"
// },

/*
{
  "product_id": "40348",
    "ratings": {
    "3": "1",
      "4": "1"
  },
  "recommended": {
    "true": "2"
  },
  "characteristics": {
    "Size": {
      "id": 135232,
        "value": "4.0000000000000000"
    },
    "Width": {
      "id": 135233,
        "value": "3.5000000000000000"
    },
    "Comfort": {
      "id": 135234,
        "value": "4.0000000000000000"
    },
    "Quality": {
      "id": 135235,
        "value": "3.5000000000000000"
    }
  }
}
*/

// const gridLayout = {
//   display: 'grid',
//   gridTemplateColumns: '1fr',
//   gridTemplateRows: 'minwidth(5, 1fr) 50px',
//   margin: 'auto',
// };

// const RatingBreakdownList = ({ metaData, sortByStar }) => (
//   <div style={gridLayout}>
//     {
//       ([5, 4, 3, 2, 1])
//         .map((rating) => (
//           <RatingsBreakdownListEntry
//             rating={rating}
//             ratings={metaData.ratings}
//             totalRating={metaData.ratings[rating] || 0}
//             sortByStar={sortByStar}
//             key={rating}
//           />
//         ))
//     }
//   </div>
// );
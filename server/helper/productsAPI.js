const axios = require('axios');
const config = require('../../config.js');

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const defaultHeaders = {
  'User-Agent': 'request',
  'Authorization': config.TOKEN
}

/* Reason for changes made: -Stormi-
- Moved headers object into a constant to improve readability (helped while debugging my issue)
- Moved function outside of module.exports so I can access them within another function (ex: calling getProductById inside getRelated);
- Changed Get Related to return an array of products (with their details) instead of just ids to prevent multiple https request from the frontend
- Changed getProductById and getRelated functions to use async/await instead of callbacks (helped with Promise.all);
  - I left the other functions to use callback but could change them to async/await if needed.
  - Left old code commented out to show the changes I made, can remove comments once Pull Request is approved by Derek
*/
  // const getProducts = (callback) => {
  //   axios
  //     .get(`${api}/products`, {
  //       headers: {
  //         'User-Agent': 'request',
  //         'Authorization': config.TOKEN
  //       }
  //     })
  //     .then((res) => {
  //       console.log('"GET all" processed. Response data:', res.data);
  //       callback(null, res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },

const getProductById = async (id, callback) => {
  //changed to get styles for current product
  try {
    const { data } = await axios.get(`${api}/products/${id}`, { headers: defaultHeaders });
    const { results: styles } = await getStyles(id);
    data.styles = styles;

    if (callback) {
      callback(null, data);
    } else {
      return data;
    }
  } catch (err) {
    console.error(err);
  }

    // .then((res) => {
    //   // console.log('GET product processed. Response data:', res.data);
    //   callback(null, res.data);
    // })
    // .catch((err) => {
    //   console.error(err);
    // })
}

const getStyles = async (id, callback) => {
  try {
    const { data } = await axios.get(`${api}/products/${id}/styles`, { headers: defaultHeaders });
    if (callback) {
      callback(null, data);
    } else {
      return data;
    }
  } catch (err) {
    console.error(err);
  }
  // axios
  //   .get(`${api}/products/${id}/styles`, {
  //     headers: defaultHeaders
  //   })
  //   .then((res) => {
  //     callback(null, res.data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
}

const getRelated = async (id, callback) => {
  try {
    const { data } =  await axios.get(`${api}/products/${id}/related`, { headers: defaultHeaders });

    //get each product by id
    const rawRelatedProducts = [];
    data.forEach(productId => {
      const data = new Promise(resolve => {
        getProductById(productId)
          .then(res => resolve(res));
      })
      rawRelatedProducts.push(data);
    });
    const relatedProducts = await Promise.all(rawRelatedProducts);

    //
    callback(null, relatedProducts);

  } catch (err) {
    console.error(err);
  }

  // callback(null, res.data);

    // .then((res) => {
    //   console.log('GET related processed. Response data:', res.data);
    //   callback(null, res.data);
    // })
    // .catch((err) => {
    //   console.error(err);
    // });
}

const getCart = (callback) => {
  axios
    .get(`${api}/cart`, {
      headers: defaultHeaders
    })
    .then((res) => {
      // console.log('GET cart processed. Response data:', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

const addToCart = (body, callback) => {
  axios
    .post(`${api}/cart`, body, {
      headers: {
        'Authorization': config.TOKEN
      }
    })
    .then((res) => {
      // console.log('POST (add to cart) processed. Response data:', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// const options = {
//   url: api,
//   headers: {
//     'User-Agent': 'request',
//     Authorization: `${config.TOKEN}`
//   }
// };
module.exports = {
  // getProducts,
  getProductById,
  getStyles,
  getRelated,
  getCart,
  addToCart,
}

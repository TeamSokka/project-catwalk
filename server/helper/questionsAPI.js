const axios = require('axios');
const config = require('../../config.js');

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// const options = {
//   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp',
//   headers: {
//     'User-Agent': 'request',
//     Authorization: `${config.TOKEN}`,
//   },
// };

const addQuestion = (data, callback) => {
  axios.post(`${api}/qa/questions`, data, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
  .then((res) => {
    console.log('data in add ', res.data);
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
  });
};

const getQuestions = (id, callback) => {
  axios.get(`${api}/qa/questions?product_id=${id}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
    .then((res) => {
      console.log('data from response', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAnswers = (id, callback) => {
  axios
    .get(`${api}/qa/questions/${id}/answers`, {
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
      },
    })
    .then((res) => {
      console.log('answers ', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  addQuestion,
  getQuestions,
  getAnswers,
};

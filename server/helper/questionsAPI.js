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


const getQuestions = (id, callback) => {
  axios.get(`${api}/qa/questions?product_id=${id}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
  .then((res) => {
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
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
    // console.log('answers ', res.data);
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
  });
};

const postQuestion = (data, callback) => {
  axios.post(`${api}/qa/questions`, data, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
  .then((res) => {
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
  });
};

const postAnswer = (id, data, callback) => {
  axios.post(`${api}/qa/questions/${id}/answers`, data, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
  .then((res) => {
    // console.log('data in add ', res.data);
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
  });
};

const putRequest = (data, callback) => {
  let { path, id, endpoint } = data;
  axios.put(`${api}/qa/${path}/${id}/${endpoint}`, data, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    }
  })
  .then((res) => {
    // console.log('data in put ', res.data);
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err, null);
  });
}


module.exports = {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  putRequest
};

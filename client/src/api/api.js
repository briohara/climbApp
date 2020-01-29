const axios = require("axios");
const proxy = "http://localhost:6900/api/";

const requestConfig = {
  headers: {
    Authorization: ""
  }
};

//Add token to all these fools
function getAllRoutes(jwt) {
  //Attach token to request
  requestConfig.headers.Authorization = `Bearer ${jwt}`;

  return axios
    .get(`${proxy}routes`, requestConfig)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function addNewRoute(route) {
  return axios
    .post(`${proxy}routes`, route)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function updateRoute(route) {
  return axios
    .put(`${proxy}routes`, route)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteRoute(jwt, routeId) {
  //Attach token to request
  requestConfig.headers.Authorization = `Bearer ${jwt}`;
  requestConfig.data = { _id: routeId };
  console.log(JSON.stringify(requestConfig));
  return axios
    .delete(`${proxy}routes`, { requestConfig })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function signIn(user) {
  return axios
    .post(`${proxy}auth/signin`, user)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return "Unauthorized";
    });
}

function createUser(user) {
  return axios
    .post(`${proxy}users`, user)
    .then(res => {
      return true;
    })
    .catch(err => {
      console.error(err);
      return false;
    });
}

module.exports = {
  getAllRoutes,
  addNewRoute,
  updateRoute,
  deleteRoute,
  signIn,
  createUser
};

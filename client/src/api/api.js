const axios = require("axios");
const proxy = `http://localhost:6660/api/`;

const requestConfig = {
  headers: {
    Authorization: ""
  },
  data: {}
};

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

function createRoute(jwt, route) {
  requestConfig.headers.Authorization = `Bearer ${jwt}`;
  requestConfig.data = route;

  return axios
    .post(`${proxy}routes`, requestConfig.data, requestConfig)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function updateRoute(jwt, route) {
  requestConfig.headers.Authorization = `Bearer ${jwt}`;
  requestConfig.data = route;
  return axios
    .put(`${proxy}routes`, requestConfig.data, requestConfig)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteRoute(jwt, routeId) {
  requestConfig.headers.Authorization = `Bearer ${jwt}`;
  requestConfig.data._id = routeId;

  return axios
    .delete(`${proxy}routes`, requestConfig)
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

function verifyGoogleUser(googleUser) {
  return axios
    .post(`${proxy}auth/googleSignin`, googleUser)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return "Unauthorized";
    });
}

function googleUserSignIn(googleUser) {
  return axios
    .post(`${proxy}users/googleUserSignin`, googleUser)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return "Unauthorized";
    });
}

module.exports = {
  getAllRoutes,
  createRoute,
  updateRoute,
  deleteRoute,
  signIn,
  createUser,
  verifyGoogleUser,
  googleUserSignIn
};
